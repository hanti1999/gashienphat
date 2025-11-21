'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Goback = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className='flex items-center gap-2 mt-12 text-gray-500 cursor-pointer'
    >
      <ArrowLeft size={16} />
      <p className='underline'>Trở lại</p>
    </div>
  );
};

export default Goback;
