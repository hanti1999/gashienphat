'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ExternalLink, Phone } from 'lucide-react';
import Link from 'next/link';
import { ProductType } from '@/types';

const ProductInteraction = ({
  product,
  selectedColor,
}: {
  product: ProductType;
  selectedColor: string;
}) => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const handleTypeChange = (type: string, value: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set(type, value);
  //   router.push(`${pathname}?${params.toString()}`, { scroll: false });
  // };

  return (
    <div className='flex flex-col gap-4 mt-4'>
      {/* <div className='flex flex-col gap-2 text-sm'>
        <span className='text-gray-500'>Màu</span>
        <div className='flex items-center gap-2'>
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 p-0.5 rounded-full ${
                selectedColor === color ? 'border-gray-300' : 'border-white'
              }`}
              key={color}
              onClick={() => handleTypeChange('color', color)}
            >
              <div
                className={`size-6 rounded-full`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div> */}
      <div className='flex flex-row items-center gap-2'>
        <Link
          href={'https://zalo.me/0982577949'}
          className='cursor-pointer hover:opacity-80 transition-opacity flex flex-1 justify-center items-center gap-1 bg-[#fb77c5] rounded-4xl px-4 py-3'
          target='_blank'
        >
          <p className='text-white'>Tư vấn ngay</p>
          <ExternalLink size={16} color='white' />
        </Link>
        <Link
          className='ring ring-gray-500 size-12 flex justify-center hover:opacity-80 transition-opacity items-center rounded-full'
          href={'tel:0982577949'}
        >
          <Phone size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductInteraction;
