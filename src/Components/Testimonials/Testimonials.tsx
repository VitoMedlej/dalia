"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper';
import useLanguage from '@/Hooks/useLanguage';
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
const tests = [
  {
    title: "Discover the Power of Truenatureblend!",
    reviewer: "(Ella, Health Enthusiast)",
    description: "Truenatureblend is a true haven for health and wellness enthusiasts like myself. Their premium selection of natural supplements is a game-changer. From the revitalizing effects of ashwagandha to the vitality boost of tongkat ali, they have it all. I've experienced a remarkable improvement in my overall well-being since I started incorporating their products into my daily routine. Truenatureblend is my go-to destination for all my health and wellness needs!",
  },
  {
    title: "A Wellness Oasis with Truenatureblend!",
    reviewer: "(Oliver, Fitness Fanatic)",
    description: "When it comes to my fitness journey, Truenatureblend has been a true ally. Their range of natural supplements, including cordyceps and lion's mane mushroom, has been a game-changer in my routine. The quality of their products is unparalleled, and I've seen significant improvements in my energy levels and mental clarity. Truenatureblend is my one-stop-shop for all things related to health and wellness. I can't recommend them enough!",
  },
  {
    title: "Truenatureblend: Your Path to Optimal Health!",
    reviewer: "(Ava, Wellness Advocate)",
    description: "As a wellness advocate, I'm always on the lookout for high-quality supplements, and Truenatureblend has exceeded my expectations. Their comprehensive range of natural products, including ashwagandha, tongkat ali, cordyceps mushroom, and more, is a testament to their commitment to well-being. Whether you're a health enthusiast or someone looking to enhance their overall health, Truenatureblend is the answer. Trust me; you won't be disappointed!",
  },
];

const Testimonial = () => {


 
  const {text} = useLanguage()
    
    
  return (
    <Box className=' flex col ' sx={{width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'6em'}}>
 <Typography
                className='sectionTitle  text-center auto center box'
                sx={{
                  pb:'.5em',
                  pt:4,
                  width:'100%',
                  display:'flex',
                  fontSize: {
                    xs: '1.62em',
                    sm: '2em',md:'2.5em'
                },
                flex:1,
                fontWeight: '500'
            }}>
              {text('Our Customers speak for us', 'عملاؤنا يتحدثون عنا')}

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
    slidesPerView: 2,
    spaceBetween: 20
  },
  940: {
    slidesPerView: 3,
    spaceBetween: 20
  }

}

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