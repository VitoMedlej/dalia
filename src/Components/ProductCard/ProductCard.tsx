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
            className='  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            minWidth: {sm:'30%'},
            width: width
                ? width
                : {
                    xs: '48%',
                    sm: '32%',
                }
            
        }}>
            <Box 
            className='cursor auto'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                width:{xs:'98%',sm:'100%',md:'350px'},
                height: height || {xs:'350px',sm:'350px',md:'400px'}
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
                px: .95,
                mt:1.5,
            }}>  <Typography
            className='limited cursor center text-center '

                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                    fontSize: {xs:'.8em',sm:'1.35em'},
                    fontWeight: '400'
                }}>
                    {title}
                </Typography>
        
               
              
               {inStock !== false ?
               <>
               <Typography
                    sx={{
                    mb:.5,
                    fontWeight: '300',
                    fontSize: {xs:'.99em',sm:'1em'}
                }}>
                    {price}$
                </Typography>
                {/* <Btn 
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
                 */}
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