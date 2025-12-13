'use client';

import SectionHeader from './SectionHeader';
import { BrandType } from '@/types';
import Image from 'next/image';

const Brands = ({ brands }: { brands: BrandType[] }) => {
  return (
    <section className='mt-6 md:mt-12 p-2'>
      <SectionHeader text='Thương hiệu' />
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
    </section>
  );
};

export default Brands;
