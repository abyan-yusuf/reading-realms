import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBookContext } from "../../Api/allData";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CatSlider = () => {
  const { category } = useBookContext();
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[EffectCards, Autoplay, Pagination]}
      className="mySwiper border-2 w-full md:w-96"
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {category.map((n) => (
        <SwiperSlide key={n._id} className="w-full h-auto">
          <h3 className="absolute text-slate-700 font-semibold bg-slate-300 px-2 py-1 rounded-r-lg">
            {n.cat_name}
          </h3>
          <img src={n.img} className="rounded-xl h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CatSlider;
