import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useBookContext } from "../../Api/allData";

export default function Slider() {
  const { book } = useBookContext();

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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="border-2 p-10 w-[100vw]"
      >
        {book.map((n) => (
          <SwiperSlide key={n._id}>
            <img src={n.imgURL} className="h-96 rounded-xl border-2 w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
