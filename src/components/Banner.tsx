'use client';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BannerType } from '@/types';

const Banner = ({ bannerList }: { bannerList: BannerType[] }) => {
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
        {bannerList.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className='relative aspect-[2/1] mb-6 md:mb-12 overflow-hidden'>
              {banner.link ? (
                <Link href={banner.link} target='_blank'>
                  <Image src={banner.image} alt='Featured Product' fill />
                </Link>
              ) : (
                <Image src={banner.image} alt='Featured Product' fill />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
