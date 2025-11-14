import { ProductsType } from '@/types';
import React from 'react';
import Categories from './Categories';
import ProductCard from './ProductCard';
import Link from 'next/link';
import Filter from './Filter';

const products: ProductsType = [
  {
    id: 1,
    name: 'Bếp gas đôi Rinnai RV-370',
    model: {
      white: 'RV-370(SM)N',
      black: 'RV-370(GM)N',
    },
    price: 1790000,
    discount: 20,
    finalPrice: 1432000,
    brandId: '1',
    categoryId: '1',
    coverImage: {
      white: '/products/rinnai-rv-370(sm)n.jpg',
      black: '/products/rinnai-rv-370(gm)n.jpg',
    },
    colors: ['white', 'black'],
  },
  {
    id: 2,
    name: 'Bếp gas đôi Akia A-72SLim',
    model: { black: 'A-72SLim' },
    price: 1790000,
    discount: 20,
    finalPrice: 1432000,
    brandId: '1',
    categoryId: '1',
    coverImage: { black: '/products/akia-7.jpg' },
    colors: ['black'],
  },
  {
    id: 3,
    name: 'Bếp gas đôi Sanka SKT-109',
    model: { black: 'SKT-109' },
    price: 1790000,
    discount: 20,
    finalPrice: 1432000,
    brandId: '1',
    categoryId: '1',
    coverImage: { black: '/products/sanka-skt109.jpg' },
    colors: ['black'],
  },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: 'homepage' | 'products';
}) => {
  return (
    <div className='w-full'>
      <Categories />
      {params === 'products' && <Filter />}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12'>
        {products.map((product) => (
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
