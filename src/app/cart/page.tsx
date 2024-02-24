'use client'
import React, { useEffect, useState } from 'react'
import {Box, Divider, TextField, Typography} from '@mui/material'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai';

import { usePathname, useRouter } from 'next/navigation'
import Btn from '@/Components/Btn/Btn';
import { ICartItem } from '@/Types/Types';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import totalCal from '@/Utils/totalCal';
import { server } from '@/Utils/Server';
import { useDiscountContext, usePromoContext } from '@/context/Contexts';
import CartProduct from '@/Components/Shared/CartProduct/CartProduct';

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
                <Typography fontSize='2em' fontWeight='bold'>
                    Your Cart Is Empty!
                </Typography>
              
                <Link className='flex auto decor-none gap' href='/collection/products'>
                    <Btn v2 className='flex auto ' sx={{
                        border:'none',
                        mt: 3
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
    const [promocode,setPromocode] = useState('')
    const [err,setErr] = useState('')
    const [loading,setLoading] = useState(false)
    const {discountedPrice, setDiscountedPrice} = useDiscountContext();
    const {promoCode,setpromoCode} = usePromoContext(); 
    const total= totalCal(cartItems) || 0; 

    console.log('total: ', total);
    const router = useRouter()
    let localCart : ICartItem[] = loadState('prodNtX932ux23') || []

    useEffect(() => {
        if (localCart) {
            setPromocode('');
            setErr('')
            setDiscountedPrice(0)
            setpromoCode(null)
            setCartItems(localCart)
    }
    }, [])

   
    

    const refetchState = () => {
        // let localCart : ICartItem[] = loadState('userbag') || []

        setCartItems(loadState('prodNtX932ux23'))
        
    }
    const handlePromoChange = async () => {
        setErr('')
        setLoading(true)   
            if (!promocode || `${promocode}`?.length < 3) {
                setErr('Please Enter a valid Code!') 
                setLoading(false)   
                
            setDiscountedPrice(0)
            setpromoCode(null)
                return
            } 
            console.log('promocode: ', promocode);
            const rawResponse = await fetch(`${server}/api/use-promo`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({order:{code:promocode,total,cartItems}})
            });

            const content = await rawResponse.json();
            console.log('content: ', content);
            if (!content?.success) {
                setErr(`${content?.message}`)    
            setDiscountedPrice(0)
            setpromoCode(null)

            setLoading(false)   

                return
            }
            setErr('')    
            setDiscountedPrice(Number(content?.discountedPrice))
            setpromoCode(promocode)
            setLoading(false)   
        }
    const remove = (id:string) => {
        let state = cartItems.filter(x => `${x._id}` !== id);
         saveState('prodNtX932ux23', state);
         setCartItems(state);
         setpromoCode(null)

     }
     useEffect(() => {
        
        if(total && promocode) {
            setErr('')
            handlePromoChange()
        }
    
    }, [total])
    const pathname = usePathname()

     const [lastPage, setLastPage] = useState('/collection/products')

     // Update lastPage whenever the page changes
     useEffect(() => {
       if (pathname?.includes('/products')) {
         setLastPage(pathname)
       }
     }, [pathname])
   
     const continueShopping = () => {
    //    router.push(lastPage)
       router.push('/collection/products')
     }
   

    return (
        <Box sx={{
            pb: 5,
            pt:4,
            maxWidth:'xl',
            margin:'0 auto',
            px: 1
        }}>
      {cartItems?.length >0 &&      <Typography
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
                        onChange={refetchState}
                        key={item._id}
                        img={item.img} qty={item.qty} remove={remove} title={item.title} _id={item._id}
                        


                        stock={Number(item?.stock)}
                        productselectedSize={item?.productselectedSize}
                        price={item.price}
                        
                        />
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
                    borderRadius:'3px',
                    border:'1px  solid #0000001c'
                }}>
                  
                    <Typography sx={{
                        ...titleStyle
                    }}>Order Summary</Typography>
                    
                           <Box 
                    sx={{
                      mt:1,
                      justifyContent: 'space-between !IMPORTANT'
                  }}
                    className='flex  items-center row'> 

                <span>Sub-total:
                </span>

                    <Typography sx={{
                        fontWeight: '400'
                    }}>${
                        cartItems?.length > 0 
                          ? Number(total  + Number(process.env.NEXT_PUBLIC_FEE || 0) )?.toFixed(2)
                          : 0
                      }</Typography>
                    
                    </Box>

           {discountedPrice && cartItems ?       <Box 
                    sx={{
                      mt:1,
                      justifyContent: 'space-between !IMPORTANT'
                  }}
                    className='flex  items-center row'> 

                <span>Discount:
                </span>

                    <Typography sx={{
                        fontWeight: '400'
                    }}>

{
          
          Number(

              ((Number(total) - Number(discountedPrice)) / Number(total)) * 100
              ).toFixed(2)
                        }%
                    </Typography>
                    
                    </Box>
                :''    
                }
                
                    <Box 
                    sx={{
                      mt:1,
                      justifyContent: 'space-between !IMPORTANT'
                  }}
                    className='flex  items-center row'> 

                <span>Total:
                </span>

                    <Typography sx={{
                        fontWeight: '600'
                    }}>${
                       Number( cartItems?.length > 0 
                        ?
                        (discountedPrice && discountedPrice !== 0 ) ?
discountedPrice  + Number(process.env.NEXT_PUBLIC_FEE || 0)
:                        
                        total + Number(process.env.NEXT_PUBLIC_FEE || 0) 
                        : 0
                        
                        
                        )?.toFixed(2)
                      }</Typography>
                    
                    </Box>
                    <Link href={discountedPrice && promoCode && cartItems ?
                    
                    `/checkout?p=${promoCode}` : 
                    '/checkout'
                    
                }
                    
                    className='decor-none bg'>

                    <Btn
                    sx={{width:'100%',borderRadius:25,mt:2.5}}>Checkout Now</Btn>
                    </Link>

                    {/* <Link href='/collection/products' className='decor-none'> */}

                    <Btn
                        onClick={continueShopping}
                     sx={{mx:0,':hover':{background:'white',color:'black'},
                     color:'black',
                     background:'transparent',borderRadius:'25px',width:'100%',mt:1}}>Continue Shopping</Btn>
                    {/* </Link> */}
                   

                    <Box sx={{pt:3}}>

                    <Typography sx={{
                        ...titleStyle
                    }}>Have Promo code?</Typography>
                     <Typography sx={{fontSize:'.75em',color:'red'}}>{err}</Typography>
                    <Box className="flex center col items-center">

                  <TextField

                  disabled={cartItems?.length < 1}
          value={`${promocode}`?.toUpperCase()?.slice(0,10)}
          onChange={(e)=>setPromocode(e?.target?.value)}
          
          id="promocode"
          name="promocode"
          label="Enter Code"
          fullWidth
          autoComplete="promo-code"
          variant="standard"
          />
          <Btn disabled={loading || !promocode || promocode?.length < 3}
           onClick={()=>handlePromoChange()} sx={{py:.25,fontSize:'.78em',color:'white',mt:1,mx:'auto',width:'max-content'}}>
            Apply Code
          </Btn>
          </Box>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

const Page = () => {
    return ( <>
    {
        false
            ? <EmptyCartAlert/>
            : <Cart/>

    } 
    
    </>
  )
}

export default Page