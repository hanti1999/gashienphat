import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-center md:justify-between border-b border-gray-200 pb-4'>
      {/* Left */}
      <Link href={'/'} className='flex items-center gap-2'>
        <Image
          src={'/logo.png'}
          alt='Hien Phat logo'
          width={36}
          height={36}
          className='size-6 md:size-10'
        />
        <div>
          <p className='text-xs md:text-lg leading-tight font-bold text-[#302671]'>
            Gas Hiền Phát
          </p>
          <p className='hidden md:block text-xs text-[#302671]'>
            26 năm đồng hành, an toàn - tiết kiệm - tin cậy
          </p>
        </div>
      </Link>
      {/* Right */}
      <SearchBar />
    </nav>
  );
};

export default Navbar;
