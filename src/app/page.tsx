import Introduce from '@/components/Introduce';
import Features from '@/components/Features';
import Banner from '@/components/Banner';
import Brands from '@/components/Brands';
import { banners, brands } from '../../database/schema';
import { db } from '../../database/drizzle';
import { asc, eq } from 'drizzle-orm';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  const bannerQuery = await db
    .select()
    .from(banners)
    .where(eq(banners.active, true))
    .orderBy(asc(banners.sortOrder));

  const brandsQuery = db.select().from(brands);

  const [bannerList, brandsList] = await Promise.all([
    bannerQuery,
    brandsQuery,
  ]);

  return (
    <div>
      <Banner bannerList={bannerList} />
      <div className='container'>
        <Introduce />
        {/* <ProductList
        category={category}
        brandsList={brandsList}
        params='homepage'
      /> */}
        <Features />
        <Brands brands={brandsList} />
      </div>
    </div>
  );
};

export default Homepage;
