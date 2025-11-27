import { asc, desc, eq, ilike, and } from 'drizzle-orm';
import Link from 'next/link';
import { categories, products, brands } from '../../database/schema';
import { db } from '../../database/drizzle';
import ProductCard from './ProductCard';
import Categories from './Categories';
import Filter from './Filter';
import Brands from './Brands';

const ProductList = async ({
  category,
  brand,
  sort,
  search,
  params,
}: {
  category?: string;
  brand?: string;
  sort?: string;
  search?: string;
  params: 'homepage' | 'products';
}) => {
  let orderBySQL = desc(products.createdAt);

  switch (sort) {
    case 'price-asc':
      orderBySQL = asc(products.finalPrice);
      break;
    case 'price-desc':
      orderBySQL = desc(products.finalPrice);
      break;
    case 'oldest':
      orderBySQL = asc(products.createdAt);
      break;
  }

  const filters = [];

  if (category) filters.push(eq(categories.slug, category));

  if (brand) filters.push(eq(brands.slug, brand));

  if (search) filters.push(ilike(products.name, `%${search}%`));

  const productQuery = db
    .select({ product: products })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(brands, eq(products.brandId, brands.id))
    .where(and(...filters))
    .orderBy(orderBySQL)
    .limit(8);

  const brandsQuery = db.select().from(brands);

  const [data, brandsList] = await Promise.all([productQuery, brandsQuery]);

  return (
    <div className='w-full'>
      <Categories />
      {params === 'products' && <Filter />}
      {data.length === 0 ? (
        <div className='text-center col-span-full py-10 text-gray-500'>
          Không tìm thấy sản phẩm nào phù hợp.
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6'>
          {data.map(({ product }) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {params != 'products' && (
        <Link
          href={category ? `/products/?category=${category}` : '/products'}
          className='flex justify-end mt-4 underline text-sm text-gray-500'
        >
          Tất cả sản phẩm
        </Link>
      )}
      <Brands brands={brandsList} />
    </div>
  );
};

export default ProductList;
