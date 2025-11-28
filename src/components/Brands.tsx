'use client';

import Image from 'next/image';
import { BrandType } from '@/types';

const Brands = ({ brands }: { brands: BrandType[] }) => {
  return (
    <div className='mt-6 md:mt-12 p-2'>
      <h2 className='text-center font-semibold uppercase text-3xl text-[#302671]'>
        ___ Thương hiệu ___
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
        {brands.map((item) => (
          <div key={item?.slug} className='flex items-center justify-center'>
            <Image
              src={item.image}
              alt={'brand-image'}
              width={120}
              height={120}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
