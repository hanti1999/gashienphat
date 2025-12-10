'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className='flex justify-center gap-2 mt-8'>
      <Link
        href={createPageURL(currentPage - 1)}
        className={`px-4 py-2 border rounded ${
          currentPage <= 1
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-gray-100'
        }`}
        aria-disabled={currentPage <= 1}
      >
        Trước
      </Link>

      <span className='px-4 py-2 font-medium bg-gray-50'>
        Trang {currentPage} / {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        className={`px-4 py-2 border rounded ${
          currentPage >= totalPages
            ? 'pointer-events-none opacity-50'
            : 'hover:bg-gray-100'
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        Sau
      </Link>
    </div>
  );
};
