import Introduce from '@/components/Introduce';
import Features from '@/components/Features';
import Banner from '@/components/Banner';
import Brands from '@/components/Brands';
import { banners, brands } from '../../database/schema';
import { db } from '../../database/drizzle';
import { asc, eq } from 'drizzle-orm';
import FadeInOnScroll from '../../lib/FadeInOnScroll';
import Services from '@/components/Services';
import NotiList from '@/components/NotiList';
import Map from '@/components/Map';

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
        <FadeInOnScroll>
          <Introduce />
        </FadeInOnScroll>
      </div>
      {/* <ProductList
        category={category}
        brandsList={brandsList}
        params='homepage'
      /> */}
      <div
        className='bg-cover bg-right bg-no-repeat'
        style={{ backgroundImage: `url('/bg-image_2.png')` }}
      >
        <div className='container '>
          <FadeInOnScroll>
            <Features />
          </FadeInOnScroll>
        </div>
      </div>
      <div className='container'>
        <FadeInOnScroll>
          <Services />
        </FadeInOnScroll>
      </div>
      <div
        className='bg-cover bg-left bg-no-repeat'
        style={{ backgroundImage: `url('/bg-image_1.png')` }}
      >
        <div className='container'>
          <FadeInOnScroll>
            <Brands brands={brandsList} />
          </FadeInOnScroll>
        </div>
      </div>
      <div className='container'>
        <FadeInOnScroll>
          <NotiList limit={3} params='homepage' />
        </FadeInOnScroll>
      </div>
      <Map />
    </div>
  );
};

export default Homepage;
