import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full flex items-end justify-center md:justify-between'>
      {/* Left */}
      <div className='flex items-end gap-2'>
        <Link href={'/'}>
          <Image
            src={'/logo.png'}
            alt='Hien Phat logo'
            width={80}
            height={80}
            className='size-6 md:size-20'
          />
        </Link>
        <div className='cursor-default'>
          <p className='text-xs md:text-lg leading-tight font-bold text-[#302671]'>
            Gas Hiền Phát
          </p>
          <p className='hidden md:block text-[#302671]'>
            26 năm đồng hành, an toàn - tiết kiệm - tin cậy
          </p>
        </div>
      </div>
      <div className='hidden md:flex md:flex-row md:items-center md:gap-2'>
        <div className='p-3 bg-[#fb77c5] rounded-full'>
          <MapPin color='#fff' size={18} />
        </div>
        <div>
          <p className='font-medium'>199, Quốc lộ 51</p>
          <p className='text-xs'>X.An Phước, T.Đồng Nai</p>
        </div>
        <div className='p-3 bg-[#fb77c5] rounded-full'>
          <Phone color='#fff' size={18} />
        </div>
        <div>
          <p className='font-medium'>Liên hệ</p>
          <p className='text-xs'>02513 511 610 - 0986 573 072</p>
        </div>
      </div>
      {/* Right */}
      {/* <SearchBar /> */}
    </nav>
  );
};

export default Navbar;
