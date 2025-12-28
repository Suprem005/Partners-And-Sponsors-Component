"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
export default function Swip() {
  return (
    <div className="mt-6">
      <Swiper
        modules={[FreeMode, Autoplay, Navigation]}
        freeMode={{ enabled: false }}
        loop={false}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={12}
        slidesPerView={1.2}
        navigation={false}
        pagination={false}
        breakpoints={{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide className="bg-gray-200 rounded-lg">
          <div className="flex justify-center items-center w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center object-contain aspect-video">
            <Image
              src={"/images/organization/formula.jpg"}
              alt="formula"
              width={500}
              height={300}
              className="w-full h-full rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center object-contain aspect-video">
            <Image
              src={"/images/organization/formula.jpg"}
              alt="formula"
              width={400}
              height={300}
              className="w-full h-full rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center object-contain aspect-video">
            <Image
              src={"/images/organization/formula.jpg"}
              alt="formula"
              width={400}
              height={300}
              className="w-full h-full rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center object-contain aspect-video">
            <Image
              src={"/images/organization/formula.jpg"}
              alt="formula"
              width={400}
              height={300}
              className="w-full h-full rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
