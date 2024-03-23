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
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box } from "@mui/material";

export default function App({images}:{images:string[] | []| undefined}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={
          {delay:4000}
        }
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
{
          images && images.map(img=>{
            return    <SwiperSlide key={img}>
              <Box sx={{height:{xs:'400px',md:'500px'}}}>

            <img className='img contain' src={`${img}`} alt={'Product Image'} />
              </Box>
          </SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}
