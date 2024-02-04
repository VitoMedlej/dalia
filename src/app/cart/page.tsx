'use client'
import React, { useEffect, useState } from 'react'
import {Box, Divider, Typography} from '@mui/material'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai';

import { useRouter } from 'next/navigation'
import Btn from '@/Components/Btn/Btn';
import CartProduct from '@/Components/Shared/CartProduct/CartProduct';
import { ICartItem } from '@/Types/Types';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import totalCal from '@/Utils/totalCal';
import useDiscount from '@/Hooks/useDiscount';

const titleStyle = {
    fontSize: '1.3em',
    fontWeight: '600 !Important',
    
}
const textStyle = {
    color: '#000000b8'
}
const EmptyCartAlert = () => {
    return (
        <Box sx={{
            pb: 10,
            pt: 15
        }}>
            <Box
                className='flexed'
                sx={{
                flexDirection: 'column',
                textAlign: 'center',
                margin: '0 auto'
            }}>
                  <Box className='auto flex' sx={{
                    width: '60px',

                }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png"
                        alt="Empty Cart Image"
                        className="img"/>
                </Box>
                <Typography fontSize='2em' component='h1' sx={{pb:1}} fontWeight='bold'>
                    Your Cart Is Empty!
                </Typography>
              
                <Link className='flex auto decor-none gap'  href='/collection/products'>
                    <Btn v2 className='flex auto ' sx={{
                        border:'none',
                        mt: 3,
                        color:'black'
                    }}>
                      Browse Collection
                        <AiOutlineShoppingCart/>
                    </Btn>
                </Link>
            </Box>
        </Box>
    )
}


const Cart = () => {
    const [cartItems,setCartItems] = useState<ICartItem[]>([])
    const total= totalCal(cartItems) || 0; 
    const {discountedPrice,isFirstOrder} = useDiscount(total)
    let localCart : ICartItem[] = loadState('prodNtX932ux') || []
    useEffect(() => {
        if (localCart) {
            
            setCartItems(localCart)
    }
      
    }, [])
    const refetchState = () => {

        setCartItems(loadState('prodNtX932ux'))
        
    }
    const remove = (id:string) => {
        let state = cartItems.filter(x => `${x._id}` !== id);
         saveState('prodNtX932ux', state);
         setCartItems(state);
     }
    return (
        <Box sx={{
            pb: 5,
            pt:6,
            maxWidth:'xl',
            margin:'0 auto',
            px: 1
        }}>
      {cartItems?.length >0 &&      <Typography
      component='h1'
                sx={{
                fontSize: '1.5em',
                padding: 1,
                fontWeight: '600'
            }}>My Cart</Typography>}
            <Box  sx={{
                display: 'flex',
               flexWrap: 'wrap'
            }}>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        md: '70%'
                    }
                }}>
                    {cartItems && cartItems.length > 0 ?
                    cartItems.map(item=>{
                        if (!item?._id) return;
                        return <CartProduct 
                        productselectedSize={item?.productselectedSize}
                        onChange={refetchState}
                        key={item._id}
                        img={item.img} qty={item.qty} remove={remove} title={item.title} _id={item._id} price={item.price}/>
                    }) :
                    <EmptyCartAlert/>     
                }
                </Box>
               
                <Box
                    sx={{
                    padding: '1em',
                    mt:{xs:'2em',sm:0},
                    height: 'fit-content',
                    width: {
                        xs: '100%',
                        md: '25%'
                    },
                    // boxShadow:'1px 1px 3px #0000002b'
                }}>
                  
                    <Typography component='h1' sx={{
                        ...titleStyle
                    }}>Order Summary</Typography>
                  
                
                    <Divider></Divider>
                    <Box 
                    sx={{
                      mt:1,
                      justifyContent: 'space-between'
                  }}
                    className='flexed'> 
{isFirstOrder &&     <Typography sx={{
            color:'green',
                        fontWeight: '600'
                    }}>
                        Get 10% off your first order!
                        </Typography>}

                    <Typography sx={{
                        fontWeight: '600'
                    }}>
                    Total:{' '}
                        <span style={{color:'green'}}>
                        ${cartItems?.length > 0 ? discountedPrice + Number(process.env.NEXT_PUBLIC_FEE || 0) : 0}
                        
                    </span>
                        </Typography>
                    </Box>
                    <Link href='/checkout'
                    
                    className='decor-none bg'>

                    <Btn
                    sx={{width:'100%',mt:2.5}}>Checkout Now</Btn>
                    </Link>

                    <Link href='/collection/products' className='decor-none'>

                    <Btn
                    
                     sx={{mx:0,':hover':{background:'white',color:'black'},background:'transparent',borderRadius:'0',width:'100%',mt:1}}>Continue Shopping</Btn>
                    </Link>
                
                </Box>
                
            </Box>
        </Box>
    )
}

const Index = () => {
    return ( <>
    {
        false
            ? <EmptyCartAlert/>
            : <Cart/>

    } 
    
    </>
  )
}

export default Index