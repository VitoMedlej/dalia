"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation } from 'swiper';
// import useLanguage from '@/Hooks/useLanguage';
import { gsap } from "gsap";



const Preloader3 = ({res}:any) => {

    // const fetchDataAndSetImgs = async () => {
    //     try {
    //       const response = await fetch('https://api.jsonbin.io/v3/b/65b919d41f5677401f28610e', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'X-Master-Key': '$2a$10$iAUMdzZeDAI2qTW61Uz6UuE/S8Bgs4LfVuZxwByPpocU4CuR7Nzo2'
    //         }
    //       });
      
    //       if (!response?.ok) {
    //         throw new Error(`Failed to fetch data. Status: ${response?.status}`);
    //       }
      
    //       const data = await response.json();
    //       setImgs(data?.record); // Assuming 'record' is the property containing the images in the response
    //       console.log('Data fetched and set to setImgs:', setImgs);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
      
    // useEffect(() => {
      
    
    //    fetchDataAndSetImgs()
    // }, [])
      
    
    const router = useRouter()

    const [imgs,setImgs] = useState(
        
        [
        // {img:'https://ucarecdn.com/4471d4e8-e247-4a18-a356-ea1022c88b94/pic2.PNG',position:''},
        // {img:`https://ucarecdn.com/20a01b7d-aec2-4cf5-9e74-09cac757d069/pic1.PNG`,position:'left'},
        // {img:'https://ucarecdn.com/8b1962c4-8df5-4dac-9bbf-300ae7988d79/R.7e46a87cc4b15fdbf0ba6e2c5c34f4bb'},

     ]
     )
     const redir = () => {
        router.push('/collection/products')
        // console.log('abc')
     }
    // useEffect(() => {
    //     console.log('res: ', res);
    // if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
    //     console.log('res?.MainCarousel: ', res?.MainCarousel);
    //     // console.log('res: ', );
    //     setImgs(res?.MainCarousel)
    // }
    // }, [])
    const ref = useRef(null);

    useEffect(() => {
      gsap.to(ref.current, {
        opacity: 1,
        // delay:.45,
        y:0,
        duration: 1,
      });
    }, []);
    useEffect(() => {
  

        if (res) {
            setImgs(res)
        }
    }, [])

    return (
        <Box
        className='op0 y1'
        ref={ref}
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            // maxWidth:'none',
            maxWidth: 'xl',
            minHeight:'300px',
            maxHeight:{sm:'90vh',md:'500px',lg:'550px',xl:'700px'},
            margin: '0 auto',
            // mt:1,
            // height : {xs:'500px',sm:'450px',md:'100%'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={true}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                
                autoplay={{
                delay: 4800,
                disableOnInteraction: true
            }}
                modules={[Navigation,Autoplay]}
                className="mySwiper swiper">
    
                {imgs && imgs?.map((item:any) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        {/* <Container className='auto' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.43}} className="absolute">

                            </Box>
                            <Box 
                            className='auto'
                            sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                maxWidth:'650px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                component='h1'
                                sx={{color:'white',fontSize:{xs:'2.65em',sm:'3.1em',md:'3.15em',lg:'3em'},
                                textTransform:'capitalize',
                                fontWeight:900}}>
                                {text('THE TASTE OF PURE AUTHENTIC HONEY WITH BEE ORGNAIC', 'استشعر قوة الطبيعة')}
                                </Typography>
                                <Typography 
                                sx={{color:'white',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'700px'}}>
                                {text('Join the BeeOrganic family today and get a 10% discount on your first purchase!', 'مرحبًا بك في ترو ناشور بليند، متجرك الشامل لجميع احتياجات صحتك وعافيتك. اكتشف تشكيلتنا الرائعة من المكملات الطبيعية الفاخرة، بما في ذلك الأشواغاندا، وتونجكات علي، وفطر كورديسيبس، وفطر رأس الأسد، والمزيد.')}

                                </Typography>
                                <Box className="flex">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='bg  borderColor' sx={{mt:3}}>
                                {text('Shop Now', 'تسوق الآن')}

                                </Btn>
                          
                                </Box>
                            </Box>
                            </Container> */}
                            <img
                               
                                className={`img cover  ${item?.position}d
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