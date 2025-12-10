'use client';
import { ArrowUpToLine, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FloatButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-8 right-8 z-50 flex gap-2 flex-col'>
      <div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className='bg-[#fb77c5] hover:bg-pink-300 cursor-pointer text-white p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50'
            aria-label='Scroll to top'
          >
            <ArrowUpToLine />
          </button>
        )}
      </div>

      <div>
        <button className='bg-[#fb77c5] hover:bg-pink-300 cursor-pointer text-white p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50'>
          <Link href='tel:0986573072'>
            <Phone />
          </Link>
        </button>
      </div>

      <div>
        <Link
          href={'https://www.facebook.com/messages/t/1346809695477930'}
          target='_blank'
          className='cursor-pointer'
        >
          <Image
            src={'/icons/FacebookLogo.png'}
            alt='Facebook logo'
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div>
        <Link href='https://zalo.me/0982577949' target='_blank'>
          <Image
            src={'/icons/zaloLogo.png'}
            alt='zalo'
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default FloatButton;
