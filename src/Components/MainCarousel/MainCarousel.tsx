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

                {[{img:`https://nfcihospitality.com/wp-content/uploads/2022/05/Future-of-food-industry-blog.jpg.webp`}
                ,
                  {img:`https://www.dreamgrow.com/wp-content/uploads/2012/01/food-beverage-facebook-examples.jpg`},
                  {img:`https://media.licdn.com/dms/image/C511BAQFRhnt6XP4thg/company-background_10000/0/1558258941628?e=1688727600&v=beta&t=c3Uy6_jbnjK6XybEo5Ybq1y_laYn76OGIKxwOFkpNfg`},
               
                
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

export default MainCarousel