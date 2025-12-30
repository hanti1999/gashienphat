import { notifications } from '../../database/schema';
import SectionHeader from './SectionHeader';
import { db } from '../../database/drizzle';
import { eq, desc } from 'drizzle-orm';
import NotiCard from './NotiCard';
import Link from 'next/link';

const NotiList = async ({
  limit,
  params,
}: {
  limit: number;
  params: 'homepage' | 'thong-bao';
}) => {
  const notiList = await db
    .select({
      id: notifications.id,
      title: notifications.title,
      slug: notifications.slug,
      type: notifications.type,
      thumbnail: notifications.thumbnail,
      shortDescription: notifications.shortDescription,
      createdAt: notifications.createdAt,
    })
    .from(notifications)
    .where(eq(notifications.published, true))
    .orderBy(desc(notifications.createdAt))
    .limit(limit);

  return (
    <section>
      {params === 'homepage' && <SectionHeader text='Thông báo' />}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        {notiList.map((noti, index) => (
          <NotiCard key={index} noti={noti} />
        ))}
      </div>
      <div className='mt-6 flex justify-end'>
        <Link className='text-[#333] underline' href={'/thong-bao'}>
          Xem thêm
        </Link>
      </div>
    </section>
  );
};

export default NotiList;
