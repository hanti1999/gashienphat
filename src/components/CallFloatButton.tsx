import { Phone } from 'lucide-react';
import Link from 'next/link';

const CallFloatButton = () => {
  return (
    <div className='fixed bottom-8 left-8 z-50'>
      <button className='bg-[#fb77c5] hover:bg-pink-300 cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50'>
        <Link href='tel:0986573072'>
          <Phone />
        </Link>
      </button>
    </div>
  );
};

export default CallFloatButton;
