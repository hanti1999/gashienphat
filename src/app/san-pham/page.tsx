import ProductList from '@/components/ProductList';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import ratelimit from '../../../lib/ratelimit';

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    category: string;
    sort: string;
    brand: string;
    search: string;
    page: string;
  }>;
}) => {
  const category = (await searchParams).category;
  const brand = (await searchParams).brand;
  const sort = (await searchParams).sort;
  const search = (await searchParams).search;
  const page = (await searchParams).page;

  const ip = (await headers()).get('x-forwarded-for') || '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect('/too-fast');

  return (
    <div>
      <ProductList
        category={category}
        params='products'
        sort={sort}
        brand={brand}
        search={search}
        page={page}
      />
    </div>
  );
};

export default ProductPage;
