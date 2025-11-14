'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6'>
      <span>Sắp xếp theo: </span>
      <select
        name='sort'
        id='sort'
        className='ring-1 ring-gray-200 shadow-md p-1 rounded-sm'
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value='moi-nhat'>Mới nhất</option>
        <option value='cu-nhat'>Cũ nhất</option>
        <option value='tang-dan'>Giá thấp đến cao</option>
        <option value='giam-dan'>Giá cao đến thấp</option>
      </select>
    </div>
  );
};

export default Filter;
