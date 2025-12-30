import { notifications } from '../../../../database/schema';
import { db } from '../../../../database/drizzle';
import ratelimit from '../../../../lib/ratelimit';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { eq } from 'drizzle-orm';
import Goback from '@/components/Goback';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const result = await db
    .select()
    .from(notifications)
    .where(eq(notifications.slug, (await params).slug));

  return {
    title: result[0].title,
    describe: result[0].shortDescription,
  };
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const result = await db
    .select()
    .from(notifications)
    .where(eq(notifications.slug, (await params).slug));

  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  return (
    <div>
      <Goback />
      <div>
        <p>Đang trong giai đoạn phát triển ..</p>
      </div>
    </div>
  );
};

export default page;
