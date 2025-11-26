'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    color: product.colors[0],
  });

  // const handleProductType = ({
  //   type,
  //   value,
  // }: {
  //   type: 'color';
  //   value: string;
  // }) => {
  //   setProductTypes((prev) => ({
  //     ...prev,
  //     [type]: value,
  //   }));
  // };

  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
      <Link href={`/products/${product?.slug}`}>
        <div className='relative aspect-square'>
          <Image
            src={product?.coverImage[productTypes.color]}
            alt={product?.name}
            fill
            className='object-cover hover:scale-105 transition-all duration-300'
          />
        </div>
      </Link>

      <div className='flex flex-col gap-4 p-4'>
        <h1 className='font-medium'>{product?.name}</h1>
        {/* <div className='flex items-center gap-4 text-xs'>
          <div>
            <span className='text-gray-500'>Màu</span>
            <div className='flex items-center gap-2'>
              {product?.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer border-1 ${
                    productTypes.color === color
                      ? 'border-gray-400'
                      : 'border-gray-200'
                  } rounded-full p-0.5`}
                  onClick={() =>
                    handleProductType({ type: 'color', value: color })
                  }
                >
                  <div
                    className='size-3.5 rounded-full'
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}

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
