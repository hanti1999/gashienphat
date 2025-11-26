'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CSSProperties } from 'react';

const Banner = () => {
  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as CSSProperties
        }
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className='relative aspect-[16/6] mb-12 rounded-lg overflow-hidden'>
            <Image src={'/banner1.jpg'} alt='Featured Product' fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative aspect-[16/6] mb-12 rounded-lg overflow-hidden'>
            <Image src={'/Lavie.png'} alt='Featured Product' fill />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative aspect-[16/6] mb-12 rounded-lg overflow-hidden'>
            <Image src={'/banner-38-ty.jpg'} alt='Featured Product' fill />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
