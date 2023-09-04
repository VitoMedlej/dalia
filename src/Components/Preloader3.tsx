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
              img: "https://ucarecdn.com/98d514c8-932d-4c8c-99b3-6f0f54959ab2/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/0483aed8-55f5-45d8-bb3a-1a2211404421/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/58b2fb29-0036-4c9b-bde0-bc623dd8e114/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/229104da-6895-44db-9c3c-92f04c0c6598/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/62da7b3c-719c-4f78-afc1-4a7b90ffbaf8/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/bf25c9fd-3f40-4e15-87c2-a94a1509e6bd/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/56d9c32b-7016-4d89-a8c9-5cf96828b829/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/6d3a20d2-417d-481c-a861-2ff1f79c65f1/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/5e99f14a-440b-4164-b092-aa4cae4e80cb/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/6a9b5ff8-8619-4310-98b7-cbc1a6cee9ec/",
              text: ""
            },
            {
              img: "https://ucarecdn.com/ed3dde91-afb2-43cb-97b8-378e55519c0b/",
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