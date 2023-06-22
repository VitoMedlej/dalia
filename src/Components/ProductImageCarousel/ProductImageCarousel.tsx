"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={
          {delay:2000}
        }
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box sx={{height:'700px'}}>

          <img className='img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
