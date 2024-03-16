import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import WhishList2 from './WhishList2'
import { useRouter } from 'next/navigation'
import useCart from '@/Hooks/useCart'

const Product2 = (
    
    {
        title,
        price,
        sizes,
        images,
        category,
        _id,
        width,
        height,
        stock,
        sx,
        inStock,
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
    
    sx?:any}) => {
    const router = useRouter()

    const {addToCart}= useCart()
  

  return (
    <Box sx={{
        // minWidth: {sm:'32%',     lg:'22%'},
        // width: width
        //     ? width
        //     : {
        //         xs: '32%',
        //         sm: '32%',
        //         lg:'22%'
        //     },
        width: width
            ? width
            : {
                xs: '48%',
                sm: '32%',
                lg:'22%'
            },
        // width: width && width,
        border : '1px solid #0000003b',
        px:{xs:2},
        borderRadius:'8px',
        py:2,
        ...sx
    }}>
        <Box>
            <img src={images && images[0]} alt="" className="img" />
        </Box>
        <Box sx={{pt:1}}>
            <Typography
                    onClick={() => router.push(`/product/${_id}`)}
            
            >
{title}

            </Typography>
            <Rating sx={{fontSize:'1em',mb:.25}} readOnly value={5}></Rating>
            <Typography sx={{fontSize:'1.1em'}}>

                {newPrice ? (
        <>
            <s>${price}</s> ${newPrice}
        </>
    ) : (
        `$${price}`
    )}
            </Typography>
        </Box>
          <Box sx={{mt:2}} className='flex row space-between justify-between gap gap1  items-center'>

            {inStock && Number(stock) > 0 ? 
            <>
            
            
            <Btn 
            
            onClick={()=>
                sizes &&  sizes?.length > 0 ? 
                router.push(`/product/${_id}`)
                :
                Number(stock) !== 0   && 
                addToCart(1,_id,{title,category,img:images[0],_id,price:newPrice?Number(newPrice):price},true)}
           
            className='bg2 gap gap1' sx={{border:'1px solid transparent',flex:1}}>
                    {sizes && sizes?.length > 0 ? 'View Product' :  'Add To Cart'}
           
            <img 
                        style={{width:'20px',height:'20px',filter:'invert(1)'}}
                        src="https://cdn-icons-png.flaticon.com/128/2636/2636890.png" alt="" className="img" />
            </Btn>
            <WhishList2
            onRemove={onRemove} productId={_id} product={{ title,
                price,
                images,
                category,
                _id,
                width,
                height}}
            />
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

export default Product2