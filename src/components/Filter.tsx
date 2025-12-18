'use client';

import { BrandType } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const sortOptions = [
  { label: 'Mới', value: 'newest' },
  { label: 'Giá thấp - cao', value: 'price-asc' },
  { label: 'Giá cao - thấp', value: 'price-desc' },
];

const Filter = ({ brands }: { brands?: BrandType[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectdSort = searchParams.get('sort');
  const selectedBrand = searchParams.get('brand');

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  const handleBrand = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('brand', value);
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <div className='flex items-center justify-center md:justify-start gap-4 mt-6 flex-wrap'>
        <Link
          href={pathname}
          className={`${!searchParams.toString() ? 'hidden' : ''}`}
        >
          <span className='text-red-500'>Xóa bộ lọc</span>
        </Link>
        {brands?.map((brand) => (
          <div
            className={`${
              selectedBrand === brand.slug ? 'ring ring-[#fb77c5]' : ''
            } rounded-md bg-gray-100 p-1 size-15 relative aspect-video cursor-pointer`}
            key={brand.slug}
            onClick={() => handleBrand(brand.slug)}
          >
            <Image src={brand.image} alt='brand-img' fill />
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 mt-2 mb-6'>
        <span>Sắp xếp: </span>
        {sortOptions.map((option) => (
          <span
            className={`cursor-pointer ${
              option.value === selectdSort ? 'text-[#fb77c5]' : ''
            }`}
            key={option.label}
            onClick={() => handleSort(option.value)}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
