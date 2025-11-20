'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const categories = [
  {
    name: 'Sản phẩm',
    icon: '/icons/shopping-bag.png',
    slug: 'san-pham',
  },
  {
    name: 'Bếp gas',
    icon: '/icons/gas-cooktop.png',
    slug: 'bep-gas',
  },
  {
    name: 'Bếp điện',
    icon: '/icons/electric-cooktop.png',
    slug: 'bep-dien',
  },
  {
    name: 'Gia dụng',
    icon: '/icons/home-appliance.png',
    slug: 'gia-dung',
  },
  {
    name: 'Phụ kiện',
    icon: '/icons/accessory.png',
    slug: 'phu-kien',
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selectedCategory = searchParams.get('category');

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', value || 'san-pham');
    router.push(`${pathname}/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm'>
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory ? 'bg-white' : 'text-gray-500'
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          <Image
            src={category.icon}
            width={20}
            height={20}
            alt={category.slug}
          />
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
