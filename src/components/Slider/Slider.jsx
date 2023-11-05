import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useBookContext } from "../../Api/allData";

export default function Slider() {
  const { book } = useBookContext()
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={4}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="border-2 p-10"
      >
        {book.map((n) => (
          <SwiperSlide key={n._id}>
            <img src={n.imgURL} className="h-96 rounded-xl border-2" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
