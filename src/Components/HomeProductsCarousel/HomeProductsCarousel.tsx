"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
// import Link from 'next/link'
import { IProduct } from '@/Types/Types'
// import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation';



const ProductCollection = ({sx,delay,Collectiontitle,data,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    data: IProduct[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {

    return (
        <Box
            sx={{
            maxWidth: 'lg',
            width :'99%',
            margin: '0 auto',
            // my: '3em',
            my:'7em',
            ...sx,
        }}>
            <Box className="flex text-center center" sx={{width:'100%'}}>

            <Typography
            component='h1'
                className='clr2 center text-center  box'
                sx={{
             
                fontSize: {
                    xs: '1.52em',
                    sm: '1.52em'
                },
                padding:.5,
                fontWeight: '600'
            }}>
              {Collectiontitle}
            </Typography>
            
            {/* <Btn
            sx={{border:'1px solid #006430'}}
            onClick={()=>router.push('/collection/products')}>
                Shop All
            </Btn> */}
            </Box>
            
            <Box
            className='w100'
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                data={data && data.length > 0 && data?.slice(0,25) || []}/>
            </Box>

   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection