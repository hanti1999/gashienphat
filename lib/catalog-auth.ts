const SECRET =
  process.env.CATALOG_SECRET_KEY || 'default-fallback-secret-change-me';
const STATIC_PIN = process.env.CATALOG_STATIC_PIN;

async function signData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 16); // Lấy 16 ký tự đầu cho link ngắn gọn
}

/**
 * Tạo mã truy cập có hạn sử dụng (mặc định 24 giờ)
 * Ví dụ kết quả: "1794905600.a1b2c3d4e5f60718"
 */
export async function generateExpiringKey(hoursValid = 24): Promise<string> {
  const expiresAt = Math.floor(Date.now() / 1000) + hoursValid * 3600;
  const sig = await signData(String(expiresAt));
  return `${expiresAt}.${sig}`;
}

/**
 * Kiểm tra mã (hỗ trợ cả Mã PIN tĩnh và Mã động có hạn sử dụng)
 * Trả về số giây còn hiệu lực nếu hợp lệ, hoặc null nếu sai/hết hạn
 */
export async function verifyAccessKey(
  inputKey: string,
): Promise<number | null> {
  const trimmed = inputKey.trim();

  // 1. Nếu trùng với Mã PIN tĩnh -> Cấp quyền xem trong 12 giờ
  if (STATIC_PIN && trimmed === STATIC_PIN) {
    return 12 * 3600;
  }

  // 2. Nếu là Mã động có định dạng: <expiresAt>.<signature>
  const parts = trimmed.split('.');
  if (parts.length !== 2) return null;

  const [expStr, providedSig] = parts;
  const expiresAt = Number(expStr);
  const now = Math.floor(Date.now() / 1000);

  if (!Number.isInteger(expiresAt) || expiresAt <= now) {
    return null; // Đã hết hạn
  }

  const expectedSig = await signData(expStr);
  if (providedSig !== expectedSig) {
    return null; // Chữ ký giả mạo
  }

  return expiresAt - now; // Số giây còn lại
}
