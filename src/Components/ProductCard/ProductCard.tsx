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
            // border : '1px solid #000000a',
            py: 1,
            margin: '0em auto',
            my:1,
            borderRadius: '5px',
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
                width:{xs:'98%',sm:'100%',md:'auto'},
                height: height || {xs:'350px',sm:'350px',md:'380px'}
            }}>
                <img
                    src={
                        ''
                        // images
                    // ? `${images[0]}-/resize/200x200/`
                    // : ''
                }
                    alt="Prdouct image"
                    className="img contain"/>
            </Box>
            
            <Box 
            sx={{
                px: .95,
                mt:.5,
            }}>  
            <Typography
            className='limited uppercase cursor auto  text-center center '
                    component='h1'
                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                      
                        textAlign:'left',
                        px:{xs:0,sm:2},
                        pt:1,
                        maxWidth:'300px',
                    fontSize: {xs:'1em',sm:'1.05em',md:'1.12em'},
                    fontWeight: '500'
                }}>
                    {title}
                </Typography>
        
               <Box className='flex col text-center center ' sx={{textAlign:'left'}}>
              
               { Number(stock) !== 0 && inStock !== false ? 
               <>
               <Typography
               className="clr2 text-center center"
    sx={{
        mb: 0.5,
        fontWeight: '300',
        fontSize: { xs: '.99em', sm: '1em' },
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
<Box className="flex center items-center">

<Btn 
            className='cursor    gap1'
                
                     onClick={()=>
                        sizes &&  sizes?.length > 0 ? 
                        router.push(`/product/${_id}`)
                        :
                        Number(stock) !== 0   && 
                        addToCart(1,_id,{title,category,img:images[0],_id,price:newPrice?Number(newPrice):price},true)}
                    
                    sx={{
                        width:'70%',
                        color:'white',
                        border:'1px solid transparent',
                        ':hover':{background:'transparent',color:'black',border:'1px solid transparent '},
                        fontWeight:'900',
                        margin:'0 '
                    // borderRadius:'8',
                        ,
                       
                }}>
                    <Box sx={{
                        fontSize:{xs:'.7em'},
                        width:'max-content',
                     }} className="  ">

                    {sizes && sizes?.length > 0 ? 'SELECT SIZE' :  'ADD TO CART'}
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