"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { INews } from '@/types';
import NewItem from './New.item';

interface INewsProps {
  data: INews[];
}

const NewsSlider = ({ data }: INewsProps) => {
  console.log("data news", data)
  return (
    <div className="w-full py-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1.15}
        spaceBetween={16}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination'
        }}
        className="!pb-3"
      >
        {data && data.map((item, index) => (
          <SwiperSlide key={index}>
            <NewItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination swiper-pagination-bullets flex justify-center gap-x-2" />
    </div>
  );
};

export default NewsSlider;