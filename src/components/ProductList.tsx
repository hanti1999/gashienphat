import { ProductsType } from '@/types';
import React from 'react';
import Categories from './Categories';
import ProductCard from './ProductCard';
import Link from 'next/link';
import Filter from './Filter';
import { db } from '../../database/drizzle';
import { products } from '../../database/schema';

const ProductList = async ({
  category,
  params,
}: {
  category: string;
  params: 'homepage' | 'products';
}) => {
  const result = await db.select().from(products);

  // console.log(JSON.stringify(result, null, 2));

  return (
    <div className='w-full'>
      <Categories />
      {params === 'products' && <Filter />}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12'>
        {result.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : '/products'}
        className='flex justify-end mt-4 underline text-sm text-gray-500'
      >
        Tất cả sản phẩm
      </Link>
    </div>
  );
};

export default ProductList;
