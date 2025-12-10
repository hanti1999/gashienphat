import ProductList from '@/components/ProductList';
import Introduce from '@/components/Introduce';
import Banner from '@/components/Banner';
import { banners } from '../../database/schema';
import { db } from '../../database/drizzle';
import { asc, eq } from 'drizzle-orm';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  const bannerList = await db
    .select()
    .from(banners)
    .where(eq(banners.active, true))
    .orderBy(asc(banners.sortOrder));

  return (
    <div>
      <Banner bannerList={bannerList} />
      <Introduce />
      <ProductList category={category} params='homepage' />
    </div>
  );
};

export default Homepage;
