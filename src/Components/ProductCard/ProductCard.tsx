"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'

import {BiCartAdd} from 'react-icons/bi';


const ProductCard = ({
    title,
    price,
    images,
    category,
    _id,
    width,
    height,
    inStock
} : {
    inStock?:boolean,
    _id: string,
    title: string,
    price: number,
    images: string[],
    category: string,
    width?: string | number
    height?: string | number
}) => {
    const router = useRouter()
    const {addToCart}= useCart()

    return (
        <Box
            className='  trans cardproduct'
            sx={{
            boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            minWidth: {xs:'150px',sm:'30%'},
            width: width
                ? width
                : {
                    xs: '47%',
                    sm: '32%',
                    md: '22%'
                }
            
        }}>
            <Box 
            className='cursor'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                height: height || {xs:'180px',sm:'300px',md:'350px'}
            }}>
                <img
                    src={images
                    ? images[0]
                    : ''}
                    alt="Prdouct image"
                    className="img contain"/>
            </Box>
            
            <Box 
            sx={{
                px: .95
            }}>  <Typography
            className='limited cursor '

                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                    fontSize: {xs:'.85em',sm:'1.005em'},
                    fontWeight: '600'
                }}>
                    {title}
                </Typography>
                    <Typography
                    sx={{
                    fontWeight: '300',
                    fontSize: '.76em'
                }}>
                    {category}
                </Typography>
               
              
               {inStock !== false ?
               <>
               <Typography
                    sx={{
                    mb:.5,
                    color:'green',
                    fontWeight: '600',
                    fontSize: {xs:'.99em',sm:'1.06em'}
                }}>
                    {price}$
                </Typography>
                <Btn 
            className='cursor  gap1'
                
                     onClick={()=>addToCart(1,_id,{title,category,img:images[0],_id,price},true)}
                    
                    sx={{
                        // color:'white',
                   
                    // borderRadius:'8',
                  
                 
                }}>
                    <Box  className="flex">

                    ADD
                    <BiCartAdd fontSize='20px'/>
                    </Box>
                </Btn>
                
               </>

               :

                  <Typography
                    sx={{
                    mb:.5,
                    color:'red',
                    fontWeight: '600',
                    fontSize: {xs:'.99em',sm:'1.06em'}
                }}>
                    Out Of Stock
                </Typography>
                }
            </Box>
        </Box>
    )
}

export default ProductCard