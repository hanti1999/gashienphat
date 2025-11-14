import ProductList from '@/components/ProductList';
import Image from 'next/image';

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className=''>
      <div className='relative aspect-[16/6] mb-12 rounded-lg overflow-hidden'>
        <Image src={'/banner1.jpg'} alt='Featured Product' fill />
      </div>
      <ProductList category={category} params='homepage' />
    </div>
  );
};

export default Homepage;
