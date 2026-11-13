import { cache } from 'react';
import { notFound } from 'next/navigation';
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

  return (
    <div className='container'>
      <Goback />
      <div
        className='prose prose-blue max-w-none mt-10'
        dangerouslySetInnerHTML={{ __html: noti.content as string }}
      />
    </div>
  );
};

export default page;
