import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Material-UI
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { breakpointsData, SpecialsOffSliderLinks } from "../../constants/UI";
import { NavLink } from "react-router-dom";
import SpecialOffCard from "../Cards/SpecialOffCard";
const SpecialsOffSlider = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex items-center justify-between w-full my-6">
        <div className="flex items-center justify-center gap-4">
          {SpecialsOffSliderLinks.map((item) => (
            <NavLink
              to="/"
              className="w-fit h-fit flex items-center justify-center py-4 px-5 text-gray-400 text-sm font-semibold rounded-xl bg-gray-100"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <button
            className="next flex items-center justify-center w-20 h-12 p-2 rounded-xl border-gray-300/80 border-[2px]"
            onClick={() => swiper.slideNext()}
          >
            <EastIcon />
          </button>
          <button
            className="prev flex items-center justify-center w-20 h-12 p-2 rounded-xl border-gray-300/80 border-[2px]"
            onClick={() => swiper.slidePrev()}
          >
            <WestIcon />
          </button>
        </div>
      </div>
      <div className="w-full h-fit  flex items-center justify-center">
        <Swiper
          breakpoints={breakpointsData}
          cssMode={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper h-[25rem] w-full py-3"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide key={item}>
              <SpecialOffCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SpecialsOffSlider;
