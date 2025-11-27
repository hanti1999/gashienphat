'use client';

import { ExternalLink, Phone } from 'lucide-react';
import Link from 'next/link';

const ProductInteraction = () => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
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
