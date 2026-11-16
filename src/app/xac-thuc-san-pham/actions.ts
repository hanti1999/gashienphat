'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  generateExpiringKey,
  verifyAccessKey,
} from '../../../lib/catalog-auth';

export async function unlockCatalogAction(
  _prevState: { error?: string } | null,
  formData: FormData,
) {
  const code = String(formData.get('code') || '');
  const remainingSeconds = await verifyAccessKey(code);

  if (!remainingSeconds) {
    return { error: 'Mã truy cập không hợp lệ hoặc đã hết hạn!' };
  }

  // Tạo token lưu vào cookie với thời hạn tương ứng
  const sessionToken = await generateExpiringKey(remainingSeconds / 3600);
  const cookieStore = await cookies();

  cookieStore.set('catalog_access', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: remainingSeconds,
  });

  redirect('/san-pham');
}
