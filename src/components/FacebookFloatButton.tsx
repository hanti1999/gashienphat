import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const FacebookFloatButton = () => {
  return (
    <div className='fixed bottom-[144px] left-8 z-50'>
      <Link
        href={'https://www.facebook.com/hienphatvina'}
        target='_blank'
        className='cursor-pointer'
      >
        <Image
          src={'/icons/FacebookLogo.png'}
          alt='Facebook logo'
          width={48}
          height={48}
        />
      </Link>
    </div>
  );
};

export default FacebookFloatButton;
