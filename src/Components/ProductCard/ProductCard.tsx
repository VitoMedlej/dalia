"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Divider, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'

import {BiCartAdd} from 'react-icons/bi';
import WishlistButton from './WhishlistButton'



const ProductCard = ({
    title,
    price,
    sizes,

    images,
    category,
    _id,
    width,
    height,
    stock,
    inStock
    ,
    newPrice,
    whishedItem,
    onRemove

} : {
    inStock?:boolean,
    _id: string,
    title: string,
    stock: number,
    sizes: {
        size: number;
        price: number;
      }[] | null;
    price: number,
    newPrice ?: number,
    images: string[],
    category: string,
    width?: string | number | any,
    height?: string | number,
    whishedItem ?:boolean,
    onRemove?: (_id: string) => void
}) => {
    const router = useRouter()
    const {addToCart}= useCart()
    console.log('sizes: ', stock);
    return (
        <Box
            className='  trans cardproduct center text-center'
            sx={{
            // boxShadow: `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px`,
            border : '1px solid #0000003b',
            pt: 4,
            height:'400px',
            margin: '0em auto',
            my:1,
            borderRadius: '15px',
            minWidth: {sm:'22%'},
            width: width
                ? width
                : {
                    xs: '32%',
                    sm: '22%',
                }
            
        }}>
            <Box 
            className='cursor auto'
               onClick={() => router.push(`/product/${_id}`)}
            sx={{
                width:{xs:'98%',sm:'100%',md:'auto'},
                height: height || {xs:'300px',sm:'200px',md:'280px'}
            }}>
                <img
                    src={
                        images
                    ? `${images[0]}-/resize/300x300/`
                    : ''
                }
                    alt="Prdouct image"
                    className="img contain"/>
            </Box>
            
            <Box
            className=' ' 
            sx={{
                mx:'auto',
                px: .95,
                mt:2.5,
            }}>  
            <Typography
            className='limited clr2 cursor  '
                    component='h1'
                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                      
                        textAlign:'left',
                        pt:4,
                        maxWidth:'280px',
                    fontSize: {xs:'1em',sm:'1.05em',md:'1.12em'},
                    fontWeight: '500'
                }}>
                    {title}
                </Typography>
        
               <Box className='flex col  ' sx={{textAlign:'left'}}>
              
               { Number(stock) !== 0 && inStock !== false ? 
               <>
               <Typography
               className=""
    sx={{
        color:'black',
        mb: 0.5,
        fontWeight: '400',
        fontSize: { xs: '.99em', sm: '1.1em' },
    }}
>
{newPrice ? (
        <>
            <s>${price}</s> ${newPrice}
        </>
    ) : (
        `$${price}`
    )}
</Typography>
<Box className="flex center items-center justify-center">

<Btn 
            className='cursor white  bg2  gap1'
                
                     onClick={()=>
                        sizes &&  sizes?.length > 0 ? 
                        router.push(`/product/${_id}`)
                        :
                        Number(stock) !== 0   && 
                        addToCart(1,_id,{title,category,img:images[0],_id,price:newPrice?Number(newPrice):price},true)}
                    
                    sx={{
                        width:'60%',
                        color:'white',
                        border:'1px solid transparent',
                        py:1,
                        px:.5,
                        
                        ':hover':{background:'transparent',color:'black',border:'1px solid transparent '},
                        fontWeight:'700',
                        margin:'0 ',
                    // borderRadius:'8',
                       
                }}>
                    <Box sx={{
                        fontSize:{xs:'1.05em'},
                        width:'max-content',
                        gap:.5,
                     }} className="items-center flex  ">
                    {sizes && sizes?.length > 0 ? 'SELECT SIZE' :  'ADD TO CART'}
                        <img 
                        style={{width:'20px',height:'20px',filter:'invert(1)'}}
                        src="https://cdn-icons-png.flaticon.com/128/2636/2636890.png" alt="" className="img" />
                    </Box>
                </Btn>
                
               {/* <Typography
                    sx={{
                    mb:.5,
                    color:'green',
                    fontWeight: '700',
                    fontSize: {xs:'.99em',sm:'1em'}
                }}>
                    {price}$
                </Typography> */}
                   <WishlistButton onRemove={onRemove} productId={_id} product={{ title,
    price,
    images,
    category,
    _id,
    width,
    height}}/>
</Box>
              
                
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
        </Box>
    )
}

export default ProductCard