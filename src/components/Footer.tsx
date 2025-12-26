import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-gray-700 text-white p-8 gap-2'>
        <div className='col-span-1 md:col-span-2 flex flex-col gap-2 items-center md:items-start'>
          {/* <Link href={'/'} className='flex items-center'>
            <Image
              src={'/logo.png'}
              alt='Hien Phat logo'
              width={36}
              height={36}
              className='size-6 md:size-9'
            />
          </Link> */}
          <h1 className='font-bold'>CÔNG TY TNHH HIỀN PHÁT VI NA</h1>
          <div>
            Địa chỉ: 199, Quốc Lộ 51, ấp 7, xã An Phước, tỉnh Đồng Nai{' '}
            <Link
              className='cursor-pointer underline text-blue-500'
              href='https://goo.gl/maps/yYy447eNamPJ1FYE9'
              target='_blank'
            >
              (xem trên Google Map)
            </Link>
          </div>
          <div>
            Điện thoại:{' '}
            <Link href='tel:02513511610'>
              <b>02513 511 610</b>
            </Link>
          </div>
          <div>
            Di động:{' '}
            <Link href='tel:0986573072'>
              <b>0986 573 072</b>
            </Link>
          </div>
          <div>
            Zalo:{' '}
            <Link href='https://zalo.me/0982577949' target='_blank'>
              <b>0982 577 948 (Hoàng Anh)</b>
            </Link>
          </div>
          <div>
            Email:{' '}
            <Link target='_blank' href='mailto:gashienphat1979@gmail.com'>
              gashienphat1979@gmail.com
            </Link>
          </div>
        </div>

        {/* <div className='col-span-1 md:col-span-1 flex flex-col gap-4 text-sm  items-center md:items-start'>
          <Link href={'/'}>Trang chủ</Link>
          <Link href={'/'}>Liên hệ</Link>
          <Link href={'/'}>Chính sách</Link>
        </div>

        <div className='col-span-1 md:col-span-1 flex flex-col gap-4 text-sm  items-center md:items-start'>
          <Link href={'/'}>Tất cả sản phẩm</Link>
          <Link href={'/'}>Sản phẩm mới</Link>
          <Link href={'/'}>Sản phẩm bán chạy</Link>
          <Link href={'/'}>Sản phẩm khuyến mãi</Link>
        </div> */}

        <div className='col-span-1 md:col-span-1 mt-2 md:mt-0 flex flex-col gap-4 text-sm items-center md:items-start'>
          <p className='text-sm'>Theo dõi chúng tôi:</p>
          <Link
            href={'https://www.facebook.com/hienphatvina'}
            target='_blank'
            className='cursor-pointer'
          >
            <Image
              src={'/icons/FacebookLogo.png'}
              alt='Facebook logo'
              width={36}
              height={36}
            />
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center p-2 text-gray-500'>
        <p>Công ty TNHH Hiền Phát Vi Na</p>
        <p className='text-center'>
          Mã số doanh nghiệp: 3603240938 do Sở Kế hoạch & Đầu tư tỉnh Đồng Nai
          cấp lần đầu ngày 30/12/2014
        </p>
        {/* <p>
          Thiết kế và phát triển bởi:{' '}
          <Link
            href={'https://zalo.me/0982577949'}
            target='_blank'
            className='font-bold underline'
          >
            Nguyễn Thông Hoàng Anh
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
