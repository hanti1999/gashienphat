import Image from 'next/image';
import React from 'react';

const Introduce = () => {
  return (
    <section className='md:flex md:flex-row md:gap-2'>
      <div className='hidden md:block md:flex-1 relative aspect-square'>
        <Image
          src={'/company.jpeg'}
          alt='image'
          fill
          className='object-contain rounded-md'
        />
      </div>
      <div className='md:flex-1 select-none'>
        <h1 className='uppercase font-bold text-[#fb77c5]'>
          Giới thiệu về chúng tôi
        </h1>
        <h1 className='uppercase font-bold text-xl text-[#302671] my-4'>
          CÔNG TY TNHH HIỀN PHÁT VI NA
        </h1>
        <p className='text-[#333] font-medium leading-loose text-justify'>
          CTY TNHH Hiền Phát Vi Na là đơn vị cung cấp gas, bếp gas và thiết bị
          gia dụng uy tín tại khu vực Long Thành. Chúng tôi chuyên phân phối gas
          chính hãng, lắp đặt – bảo trì hệ thống bếp và cung cấp các sản phẩm
          gia dụng chất lượng cao cho hộ gia đình, quán ăn và doanh nghiệp.{' '}
          <br /> Với nhiều năm hoạt động cùng đội ngũ nhân sự tận tâm, Hiền Phát
          Vi Na luôn đặt an toàn, minh bạch và dịch vụ chu đáo làm ưu tiên hàng
          đầu. Chúng tôi tự hào là lựa chọn tin cậy của hàng nghìn khách hàng
          thân thiết, mang đến trải nghiệm mua sắm nhanh chóng, tiện lợi và bảo
          đảm chất lượng trong từng sản phẩm.
        </p>
        <h3 className='text-[#fb77c5] font-bold text-center mt-2'>
          Phương châm hoạt động: AN TOÀN - TIẾT KIỆM - TIN CẬY
        </h3>
      </div>
    </section>
  );
};

export default Introduce;
