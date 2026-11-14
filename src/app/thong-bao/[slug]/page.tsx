import { cache } from 'react';
import { notFound } from 'next/navigation';
import sanitizeHtml from 'sanitize-html';
import { and, eq } from 'drizzle-orm';
import { notifications } from '../../../../database/schema';
import { db } from '../../../../database/drizzle';
import Goback from '@/components/Goback';

const getNotificationBySlug = cache(async (slug: string) => {
  const result = await db
    .select()
    .from(notifications)
    .where(and(eq(notifications.slug, slug), eq(notifications.published, true)))
    .limit(1);

  return result[0] ?? null;
});

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const noti = await getNotificationBySlug(slug);

  if (!noti) {
    return {
      title: 'Không tìm thấy thông báo',
    };
  }

  return {
    title: noti.title,
    description: noti.shortDescription ?? '',
  };
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const noti = await getNotificationBySlug(slug);

  if (!noti) {
    notFound();
  }

  // 2. Đảm bảo dữ liệu từ cột jsonb là chuỗi trước khi làm sạch
  const rawHtml = typeof noti.content === 'string' ? noti.content : '';

  // 3. Làm sạch HTML: giữ lại các thẻ trình bày (ảnh, bảng, tiêu đề) nhưng chặn XSS
  const cleanHtml = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'h1',
      'h2',
      'span',
      'figure',
      'figcaption',
      'u',
      's',
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['class', 'style'], // Cho phép class và inline style từ bộ soạn thảo
      img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
      a: ['href', 'name', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'], // Chặn giao thức javascript: và data: độc hại
    transformTags: {
      // Tự động thêm rel="noopener noreferrer" cho các link mở tab mới
      a: sanitizeHtml.simpleTransform('a', {
        rel: 'noopener noreferrer',
      }),
    },
  });

  return (
    <div className='container'>
      <Goback />
      <div
        className='prose prose-blue max-w-none mt-10'
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </div>
  );
};

export default page;
