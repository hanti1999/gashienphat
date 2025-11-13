import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href={'/'} className='flex items-center'>
          <Image
            src={'/logo.png'}
            alt='Hien Phat logo'
            width={36}
            height={36}
          />
          <p className='hidden md:block font-medium tracking-wider text-white'>
            Hiền Phát
          </p>
        </Link>
        <p className='text-sm text-gray-400'>2025</p>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={'/'}>Trang chủ</Link>
        <Link href={'/'}>Liên hệ</Link>
        <Link href={'/'}>Chính sách</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={'/'}>Tất cả sản phẩm</Link>
        <Link href={'/'}>Sản phẩm mới</Link>
        <Link href={'/'}>Sản phẩm bán chạy</Link>
        <Link href={'/'}>Sản phẩm khuyến mãi</Link>
      </div>

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={'/'}>Giới thiệu</Link>
      </div>
    </div>
  );
};

export default Footer;
