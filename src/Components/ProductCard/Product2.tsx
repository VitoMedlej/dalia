import { Box, Rating, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import WhishList2 from './WhishList2'
import { useRouter } from 'next/navigation'
import useCart from '@/Hooks/useCart'
import { Review } from '@/Types/Types'





function calculateAverageReview(reviews?: any[]): number {
    if (!reviews || reviews?.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].reviewStars;
    }

    return sum / reviews.length;
}
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
        onRemove,
        reviews
    
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
        reviews?: any[] ;
        onRemove?: (_id: string) => void
    
    sx?:any}) => {
    const router = useRouter()

    const {addToCart}= useCart()
  
        const reviewsSum = calculateAverageReview(reviews);
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
        // border : '1px solid #0000003b',
        px:{xs:2},
        borderRadius:'8px',
        py:2,
        ...sx
    }}>


        <Box 
        sx={{height:{xs:'200px',sm:'250px'}}}
               onClick={() => router.push(`/product/${_id}`)}
        
        className='cursor pointer'
        >
            <img src={images && images[0]} alt="" className="img contain" />
        </Box>


        <Box sx={{pt:1}}>
            <Typography
            className='limited cursor pointer'
            sx={{fontSize:{xs:".75em",sm:'.8em',md:'1em'}}}
                    onClick={() => router.push(`/product/${_id}`)}
            
            >
{title}

            </Typography>
            <Box className='flex row items-center'>
            <Rating sx={{fontSize:'.8em',mb:.25}} readOnly value={reviewsSum || 0}></Rating>
            <Typography sx={{fontSize:'.75em',color:'#616161',mb:.25}}>

            {`(${reviews && reviews?.length > 0 ? reviews?.length : 0 })`}
            </Typography>
            </Box>
            <Typography className='clr' sx={{fontWeight:700,fontSize:'1em'}}>

                {newPrice ? (
        <>
            <s>${Number(price).toFixed(2)}</s> ${Number(newPrice).toFixed(2)}
        </>
    ) : (
        `$${Number(price).toFixed(2)}`
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
           
            className=' gap gap1 bg2' sx={{border:'1px solid transparent',flex:1,
            ':hover':{color:'white'},
            padding:'.45em .5em !Important',
            color:'white',
            textTransform:'none',
            fontSize:{xs:'.7em',sm:'.8em'},
    borderRadius:'8px',

            fontWeight:800,
            backgroundColor:'transparent',
            }}>
           
            <img 
                        style={{
                            filter:'invert(1)'
                            ,width:'17px'}}
                            src="https://cdn-icons-png.flaticon.com/128/2636/2636890.png" alt="" className="img" />
                            {sizes && sizes?.length > 0 ? 'View' :  'Add to cart'}
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