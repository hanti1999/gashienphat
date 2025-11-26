import ProductList from '@/components/ProductList';
import Banner from '@/components/Banner';
import Introduce from '@/components/Introduce';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className=''>
      <Banner />
      <Introduce />
      <ProductList category={category} params='homepage' />
    </div>
  );
};

export default Homepage;
