'use client';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import React, { CSSProperties, useState } from 'react';
import Image from 'next/image';

const CarouselSwiper = ({
  carousel,
  coverImage,
}: {
  carousel: string[];
  coverImage: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <div className='relative aspect-4/3'>
            <Image
              src={coverImage}
              alt={'cover image'}
              fill
              priority={true}
              className='object-contain rounded-md'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </SwiperSlide>
        {carousel.map((img, index) => (
          <SwiperSlide key={img}>
            <div className='relative aspect-4/3'>
              <Image
                src={img}
                alt={'carousel image ' + index}
                fill
                className='object-contain rounded-md'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='relative aspect-4/3'>
            <Image
              src={coverImage}
              alt={'thumbnail cover image'}
              fill
              className='object-contain rounded-md'
              sizes='(max-width: 768px) 25vw, 15vw'
            />
          </div>
        </SwiperSlide>
        {carousel.map((img, index) => (
          <SwiperSlide key={img}>
            <div className='relative aspect-4/3'>
              <Image
                src={img}
                alt={'thumbnail image ' + index}
                fill
                className='object-contain rounded-md'
                sizes='(max-width: 768px) 25vw, 15vw'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
