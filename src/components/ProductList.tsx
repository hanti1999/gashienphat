import { ProductsType } from '@/types';
import React from 'react';
import Categories from './Categories';
import ProductCard from './ProductCard';

const products: ProductsType = [
  {
    id: 1,
    name: 'Bếp gas đôi Akia',
    price: 1790000,
    discount: 20,
    finalPrice: 1432000,
    brandId: '1',
    categoryId: '1',
    coverImage: '/products/1gr.png',
  },
  {
    id: 2,
    name: 'Bếp gas đôi Ogawa',
    price: 1790000,
    discount: 20,
    finalPrice: 1432000,
    brandId: '1',
    categoryId: '1',
    coverImage: '/products/1gr.png',
  },
  {
    id: 3,
    name: 'Bếp gas đôi Rinnai',
    price: 1790000,
    discount: 20,
    finalPrice: 1432000,
    brandId: '1',
    categoryId: '1',
    coverImage: '/products/1gr.png',
  },
];

const ProductList = () => {
  return (
    <div className='w-full'>
      <Categories />
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
