import { NextRequest, NextResponse } from 'next/server';
import { generateExpiringKey, verifyAccessKey } from '../lib/catalog-auth';

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // 1. Nếu người dùng truy cập qua link có kèm ?key=...
  const keyFromUrl = searchParams.get('key');
  if (keyFromUrl) {
    const remainingSeconds = await verifyAccessKey(keyFromUrl);
    if (remainingSeconds) {
      // Xóa ?key= khỏi URL để giữ sạch thanh địa chỉ
      const cleanUrl = req.nextUrl.clone();
      cleanUrl.searchParams.delete('key');

      const sessionToken = await generateExpiringKey(remainingSeconds / 3600);
      const res = NextResponse.redirect(cleanUrl);

      res.cookies.set('catalog_access', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: remainingSeconds,
      });
      res.headers.set(
        'X-Robots-Tag',
        'noindex, nofollow, noarchive, nosnippet',
      );
      return res;
    }
  }

  // 2. Kiểm tra cookie hiện tại của người dùng
  const tokenCookie = req.cookies.get('catalog_access')?.value;
  if (tokenCookie) {
    const remainingSeconds = await verifyAccessKey(tokenCookie);
    if (remainingSeconds) {
      const res = NextResponse.next();
      // Chặn tuyệt đối các công cụ tìm kiếm lập chỉ mục
      res.headers.set(
        'X-Robots-Tag',
        'noindex, nofollow, noarchive, nosnippet',
      );
      return res;
    }
  }

  // 3. Nếu chưa có quyền hoặc mã hết hạn -> Chuyển hướng sang trang nhập mã
  const unlockUrl = new URL('/xac-thuc-san-pham', req.url);
  const res = NextResponse.redirect(unlockUrl);
  res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
  return res;
}

// Áp dụng cho cả /san-pham và toàn bộ trang chi tiết /san-pham/[slug]
export const config = {
  matcher: ['/san-pham', '/san-pham/:path*'],
};
