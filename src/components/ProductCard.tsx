'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
      <Link href={`/san-pham/${product?.slug}`}>
        <div className='relative aspect-square'>
          <Image
            src={product?.coverImage}
            alt={product?.name}
            fill
            className='object-cover hover:scale-105 transition-all duration-300'
          />
        </div>
      </Link>

      <div className='flex flex-col gap-4 p-4'>
        <h1 className='font-medium line-clamp-2'>{product?.name}</h1>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-4'>
            <p className='line-through text-sm'>
              {Number(product.price).toLocaleString()} đ
            </p>
            <div className='px-1 py-0.5 bg-red-500 rounded-lg'>
              <p className='text-xs text-white'>-{Number(product.discount)}%</p>
            </div>
          </div>
          <p className='text-lg font-bold'>
            {Number(product.finalPrice).toLocaleString('vi-VN')} đ
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
