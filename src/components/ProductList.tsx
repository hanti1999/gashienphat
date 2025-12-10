import { asc, desc, eq, ilike, and, sql } from 'drizzle-orm';
import Link from 'next/link';
import { categories, products, brands } from '../../database/schema';
import { db } from '../../database/drizzle';
import { Pagination } from './Pagination';
import ProductCard from './ProductCard';
import Categories from './Categories';
import Filter from './Filter';
import Brands from './Brands';

const PAGE_SIZE = 12;

const ProductList = async ({
  category,
  brand,
  sort,
  search,
  params,
  page,
}: {
  category?: string;
  brand?: string;
  sort?: string;
  search?: string;
  params: 'homepage' | 'products';
  page?: string;
}) => {
  const currentPage = Number(page) || 1;
  const offset = (currentPage - 1) * PAGE_SIZE;

  let orderBySQL = desc(products.createdAt);
  switch (sort) {
    case 'price-asc':
      orderBySQL = asc(products.finalPrice);
      break;
    case 'price-desc':
      orderBySQL = desc(products.finalPrice);
      break;
  }

  const filters = [];

  if (category) {
    filters.push(eq(categories.slug, category));
  } else if (params === 'homepage' && !brand && !search) {
    filters.push(eq(categories.slug, 'bep-gas'));
  }

  if (brand) filters.push(eq(brands.slug, brand));

  if (search) filters.push(ilike(products.name, `%${search}%`));

  const productQuery = db
    .select({ product: products })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(brands, eq(products.brandId, brands.id))
    .where(and(...filters))
    .orderBy(orderBySQL)
    .limit(PAGE_SIZE)
    .offset(offset);

  const countQuery = db
    .select({ count: sql<number>`count(${products.id})` })
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(brands, eq(products.brandId, brands.id))
    .where(and(...filters));

  const brandsQuery = db.select().from(brands);

  const [data, totalResult, brandsList] = await Promise.all([
    productQuery,
    countQuery,
    brandsQuery,
  ]);

  const totalItems = Number(totalResult[0]?.count || 0);
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  return (
    <div className='w-full'>
      <Categories />
      {params === 'products' && <Filter brands={brandsList} />}
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
      {params === 'products' ? (
        <Pagination totalPages={totalPages} />
      ) : (
        data.length > 0 && (
          <div className='mt-4 flex justify-center'>
            <Link
              href='/products'
              className='uppercase px-4 py-2 bg-[#fb77c5] hover:bg-pink-300 shadow-lg cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-2xl text-sm text-white'
            >
              Xem thêm
            </Link>
          </div>
        )
      )}
      {params === 'homepage' && <Brands brands={brandsList} />}
    </div>
  );
};

export default ProductList;
