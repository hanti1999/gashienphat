import ProductList from '@/components/ProductList';
import Banner from '@/components/Banner';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className=''>
      <Banner />
      <ProductList category={category} params='homepage' />
    </div>
  );
};

export default Homepage;
