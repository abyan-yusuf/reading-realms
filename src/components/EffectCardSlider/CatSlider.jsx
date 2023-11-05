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
      className="mySwiper w-[550px] border-2"
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {category.map((n) => (
        <SwiperSlide key={n._id}>
          <h3 className="absolute text-slate-700 font-semibold bg-slate-300 px-2 py-1 rounded-r-lg">
            {n.cat_name}
          </h3>
          <img src={n.img} className="h-72 rounded-xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CatSlider;
