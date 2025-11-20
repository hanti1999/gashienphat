'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/types';

const ProductInteraction = ({
  product,
  selectedColor,
}: {
  product: ProductType;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='flex flex-col gap-4 mt-4'>
      <div className='flex flex-col gap-2 text-sm'>
        <span className='text-gray-500'>Màu</span>
        <div className='flex items-center gap-2'>
          {product.colors.map((color) => (
            <div
              className={`cursor-pointer border-1 p-[2px] ${
                selectedColor === color ? 'border-gray-300' : 'border-white'
              }`}
              key={color}
              onClick={() => handleTypeChange('color', color)}
            >
              <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className='text-gray-500 mb-2'>Tư vấn ngay:</p>
        <Link
          href={'https://zalo.me/0982577949'}
          className='cursor-pointer  inline-block'
          target='_blank'
        >
          <div className='relative aspect-square size-16'>
            <Image src={'/icons/zaloLogo.png'} alt='zalo-logo' fill />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductInteraction;
