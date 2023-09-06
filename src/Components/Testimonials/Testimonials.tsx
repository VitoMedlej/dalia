"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper';
// import { Autoplay, Pagination } from 'swiper/modules';
// import {FreeMode, Autoplay, Pagination} from "swiper";



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]


const Testimonial = () => {


const tests =[
    {
      title: "A Pet Paradise!",
      reviewer: "(Emma, Pet Lover)",
      description: "Pets Town is an absolute paradise for pet owners. Their wide array of pet supplies is simply amazing. From top-notch pet food to a delightful selection of toys and accessories, they cater to every pet&apos;s needs. I&apos;m thoroughly impressed by their unwavering commitment to quality and their genuine care for their customers. Pets Town has become my go-to place for all things pet-related!",
    },
    {
      title: "Exceptional Service, Happy Pets!",
      reviewer: "(Daniel, Proud Pet Parent)",
      description: "Pets Town sets a high standard for pet shops. As a devoted pet parent, finding reliable pet supplies is crucial, and Pets Town consistently delivers. Their website is user-friendly, making it a breeze to find everything my furry friend needs. What truly sets them apart is their dedication to providing top-quality products and their keen eye for detail. Pets Town has earned my trust as the ultimate destination for pet essentials!",
    },
    {
      title: "A Lifesaver for Pet Businesses!",
      reviewer: "(Sophia, Pet Business Owner)",
      description: "Managing pet supplies for our business used to be a hassle until we discovered Pets Town. We regularly source pet supplies for our clients and partners, and Pets Town&apos;s extensive product range has been a game-changer. Even with large orders, their website handles them seamlessly. The Pets Town team goes above and beyond to ensure our branding looks flawless on the pet supplies. Their professionalism and efficiency have saved us invaluable time. We wholeheartedly endorse Pets Town!",
    },
  ];
    
    
  return (
    <Box className=' flex col ' sx={{background:'#00000005',width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'6em'}}>
 <Typography
                className='sectionTitle clr text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:9,
                  width:'100%',
                  display:'flex',
                  fontSize: {
                    xs: '1.42em',
                    sm: '2em'
                },
                flex:1,
                fontWeight: '600'
            }}>
                Our Client&apos;s Testimonials
            </Typography>
            </Box>
       <Box
            sx={{
            
         
            margin: '0em auto',
            width: '100%',
            maxWidth: 'lg',
            mb:'6em',
            display: {
                xs: 'flex'
            },
            // height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            
                // navigation={true}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={
 {// when window width is >= 320px
 320: {
    slidesPerView:1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 3,
    spaceBetween: 20
  }}

                }
                modules={[ Autoplay]}
              >

                {tests.map((item ) => {
                    if (!item.title) 
                        return
                    return <SwiperSlide
                        style={{
                        padding:'2em 0',
                        marginRight: '0 !important'
                    }}
                        key={item.title}>
                         <TestimonialCard title={item.title} reviewer={item.reviewer} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial