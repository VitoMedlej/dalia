"use client"
import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';

const MainCarousel = () => {
    const router = useRouter()
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            width: {xs:'98%',md:'74%',lg:'80%'},
           
            maxWidth: 'lg',
            maxHeight:'450px',
             
            margin: '2em auto',
            display: {
                xs: 'flex'
            },
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

                {[{img:`https://ucarecdn.com/3deded50-1400-44e0-b3ee-27f323b0fed7/nam.jpg`}
                ,
                  {img:`https://ucarecdn.com/4face378-6379-489a-99b8-313ba1a8787e/218830818_153289383562061_8080673696620219664_n.jpg`},
                  {img:`https://ucarecdn.com/ae35e87f-2e40-4a10-807b-ac300cc8f675/Capture.JPG`},
               
                
            ].map((item) => {

                    return <SwiperSlide 
                        onClick={() => router.push('/collection/products')}
                    className='ztop pointer ' key={item.img}>
                        <Box
                            sx={{
         
                        
                                height: '100%',
                            width:'100%'
                        }}>

                            <img
            
                                className={`img pointer contain 
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

export default MainCarousel