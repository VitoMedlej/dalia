"use client"
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import  { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';


const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState(
        [
            {
                img: "https://ucarecdn.com/22466a86-d184-41b1-8ac3-32c9a47d1a44/InShot_20230909_2242239471.jpg",
                text: ""
            },
            {
                img: "https://ucarecdn.com/9c88e6d7-12be-4b3c-949d-28ac9e14c7e2/InShot_20230909_2245426331.jpg",
                text: ""
            }
           
          ]
        
    )
    useEffect(() => {
    if (res && res?.MainCarousel && res?.MainCarousel?.length >0) {
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            // maxWidth: 'lg',
            maxHeight:{xs:'100vh',md:'500px'},
            // maxWidth:'lg',
            margin: '0 auto',
            display: {
                xs: 'flex'
            },
            mt:0,
            pt:0,
            mb:2,
            height: '100%'
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        onClick={() => router.push('/collection/products')}
                    className='ztop pointer ' key={item.img}>
                        <Box
                            sx={{
         
                        
                                height: '100%',
                            width:'100%'
                        }}>
    
                            <img
            
                                className={`img pointer  
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3