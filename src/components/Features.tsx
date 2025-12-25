import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const features = [
  {
    title: 'Bình gas LPG',
    img: '/features/gas.jpg',
    desc: 'Gas chính hãng, an toàn, kiểm định đầy đủ',
  },
  {
    title: 'Bếp gas',
    img: '/features/bep-gas.jpg',
    desc: 'Bếp gas chính hãng, đa dạng mẫu mã, mức giá, được bảo hành đầy đủ',
  },
  {
    title: 'Bếp điện',
    img: '/features/bep-dien.jpg',
    desc: 'Bếp điện chính hãng, tiết kiệm điện, bảo hành dài lâu',
  },
  {
    title: 'Phụ kiện',
    img: '/features/phu-kien.jpg',
    desc: 'Phụ kiện đa dạng, chất lượng cao, giá cả hợp lý',
  },
  {
    title: 'Nước khoáng',
    img: '/features/nuoc.jpg',
    desc: 'Nước khoáng chính hãng',
  },
  {
    title: 'Máy lọc nước',
    img: '/features/may-loc-nuoc.jpg',
    desc: 'Máy lọc nước chính hãng',
  },
  {
    title: 'Nấu công nghiệp',
    img: '/features/cong-nghiep.JPG',
    desc: 'Nồi cơm điện, nồi cơm gas, nấu công nghiệp',
  },
  {
    title: 'Gạo',
    img: '/features/gao.jpg',
    desc: 'Gạo sạch',
  },
];

const Features = () => {
  return (
    <div>
      <SectionHeader text='Sản phẩm' />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-6'>
        {features.map((feature, index) => (
          <div key={index} className='shadow-lg rounded-lg overflow-hidden'>
            <div className='aspect-square overflow-hidden size-70 relative'>
              <Image
                alt={feature.title}
                src={feature.img}
                fill
                className='hover:scale-105 transition-all duration-300'
              />
            </div>
            <div className='p-2 flex justify-center bg-white'>
              <p className='uppercase text-lg font-medium select-none'>
                {feature.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
