"use client";

import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AppSlider({
  slidesPerView,
  children,
  showNavigation = true,
  showPagination = true,
}: {
  slidesPerView?: number;
  children: React.ReactNode;
  showNavigation?: boolean;
  showPagination?: boolean;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      className="flex w-full justify-start items-center"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.stop()}
    >
      <div className="flex mt-6 max-w-7xl">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[FreeMode, Autoplay, Navigation]}
          freeMode={{ enabled: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={12}
          slidesPerView={slidesPerView ?? 2}
          breakpoints={{
            640: { slidesPerView: slidesPerView ?? 3 },
            768: { slidesPerView: slidesPerView ?? 4 },
            1024: { slidesPerView: slidesPerView ?? 5 },
          }}
          navigation={showNavigation}
          pagination={showPagination ? { clickable: true } : false}
          className="px-6"
        >
          {children}
        </Swiper>
      </div>
    </section>
  );
}
