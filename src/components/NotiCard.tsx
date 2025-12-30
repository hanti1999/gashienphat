'use client';
import { NotificationType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const NotiCard = ({ noti }: { noti: NotificationType }) => {
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('vi-VN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <Link
      href={`/notifications/${noti.slug}`}
      className='shadow-lg rounded-lg overflow-hidden col-span-1'
    >
      <div className='aspect-2/1 overflow-hidden relative'>
        {noti.thumbnail ? (
          <Image
            alt={noti.title}
            src={noti.thumbnail}
            fill
            className='hover:scale-105 transition-all duration-300'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-gray-400 bg-gray-100'>
            <span className='text-3xl font-bold opacity-20'>Hình ảnh</span>
          </div>
        )}
      </div>
      <div className='p-2  bg-white'>
        <p className='text-gray-500 text-xs'>{formatDate(noti.createdAt)}</p>
        <p className='md:text-lg font-medium select-none'>{noti.title}</p>
      </div>
    </Link>
  );
};

export default NotiCard;
