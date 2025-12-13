import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const features = [
  {
    title: 'Gas LPG',
    img: '/features/gas.jpg',
    desc: 'Gas chính hãng, an toàn, kiểm định đầy đủ',
  },
  {
    title: 'Bếp gas/Bếp điện',
    img: '/features/bep-gas.jpg',
    desc: 'Bếp gas chính hãng, đa dạng mẫu mã, mức giá, được bảo hành đầy đủ',
  },
];

const Features = () => {
  return (
    <section>
      <SectionHeader text='Sản phẩm' />
      <div className='grid grid-cols-4 gap-2 mt-2'>
        {features.map((feature, index) => (
          <div key={index} className='shadow-lg rounded-lg overflow-hidden'>
            <div className='relative aspect-square'>
              <Image
                alt={feature.title}
                src={feature.img}
                width={280}
                height={280}
              />
            </div>
            <div className='p-2 flex justify-center'>
              <p className='uppercase text-lg font-medium'>{feature.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
