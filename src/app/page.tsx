import ProductList from '@/components/ProductList';
import Introduce from '@/components/Introduce';
import Banner from '@/components/Banner';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div>
      <Banner />
      <Introduce />
      <ProductList category={category} params='homepage' />
    </div>
  );
};

export default Homepage;
