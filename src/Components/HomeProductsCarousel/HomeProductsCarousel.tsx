import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
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
            mt: '6em',
            mb:'3em',
            ...sx,
        }}>
       
            <Typography
                className='sectionTitle text-center center auto box'
                sx={{
             
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                padding:.5,
                fontWeight: '300'
            }}>
              {Collectiontitle}
            </Typography>
            <Divider  light />

            
            <Box
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                data={data && data.length > 0 && data?.slice(0,25) || []}/>
            </Box>
            <Divider  light />

            <Link  href='/collection/products' className="decor-none">

                <Btn sx={{margin:'1em auto'}}>
                    All Products
                </Btn>
</Link>
        
                </Box>
                
                )
                
            }

export default ProductCollection