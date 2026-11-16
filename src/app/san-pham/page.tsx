import ProductList from '@/components/ProductList';
import { db } from '../../../database/drizzle';
import { brands } from '../../../database/schema';

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
  const brandsList = await db.select().from(brands);

  return (
    <div>
      <ProductList
        category={category}
        params='products'
        sort={sort}
        brand={brand}
        search={search}
        page={page}
        brandsList={brandsList}
      />
    </div>
  );
};

export default ProductPage;
