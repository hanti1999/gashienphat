import Image from 'next/image';
import SectionHeader from './SectionHeader';

const data = [
  {
    img: '/icons/easy-installation.png',
    title: 'Cung cấp & lắp đặt',
    desc: 'Cung cấp gas, lắp đặt đường ống dẫn gas, bếp gas gia dụng, công nghiệp, quán ăn',
  },
  {
    img: '/icons/tools.png',
    title: 'Bảo dưỡng & sửa chữa',
    desc: 'Bảo dưỡng & sửa chữa bếp gas, đường ống dẫn gas, thay thế phụ tùng',
  },
  {
    img: '/icons/rent.png',
    title: 'Cho thuê',
    desc: 'Cho thuê gas, bếp gas công nghiệp',
  },
];

const Services = () => {
  return (
    <div>
      <SectionHeader text='Dịch vụ' />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 select-none'>
        {data.map((item, index) => (
          <div className='col-span-1' key={index}>
            <div className='flex items-center gap-2'>
              <div className='rounded-full bg-gray-100 p-4'>
                <Image src={item.img} alt={item.img} width={60} height={60} />
              </div>
              <div className='flex-1'>
                <h2 className='font-medium text-lg uppercase text-[#302671]'>
                  {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
