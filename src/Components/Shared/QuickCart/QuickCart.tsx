"use client"
import {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import {IconButton, Typography} from '@mui/material';
import { useRouter } from 'next/navigation';
import { ICartItem } from '@/Types/Types';
import { useCartContext } from '@/context/Contexts';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import Btn from '@/Components/Btn/Btn';
import CartProduct from '../CartProduct/CartProduct';
import {GrFormClose} from 'react-icons/gr'

export default function TemporaryDrawer() {
    const router = useRouter()
    const {cartOpen,
        setCartOpen} = useCartContext();
        const [cartItems,setCartItems] = useState<ICartItem[]>([])
        useEffect(() =>{
            let localCart : ICartItem[] = loadState('cart-items') || []
            if (localCart) {
                
                setCartItems(localCart)
        }
    },[cartOpen])

    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setCartOpen(open);
    };
    const remove = (_id:string) => {
       let state = cartItems.filter(x => `${x._id}` !== _id);
        saveState('cart-items', state);
        setCartItems(state);
    }
    return (
        <div>
            <Drawer  anchor={'right'} open={cartOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                    maxWidth: '500px',
                    width: '100%',

                    margin: '0 auto'
                }}>
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mx: '1em',
                        justifyContent: 'space-between'
                    }}>
                        <h2 
                        onClick={()=>{setCartOpen(false),router.push('/cart')}}
                            style={{
                            cursor:'pointer',
                            fontWeight: '500',
                        }}>
                             Your Cart
                        </h2>
                        <IconButton onClick={toggleDrawer(false)}>
                            <GrFormClose
                                color='red'
                                />
                        </IconButton>
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        maxHeight: '350px',
                        overflowY: 'scroll'
                    }}>
                        {
                           cartItems && cartItems.length > 0 ? cartItems.map((item:ICartItem, index) =>{

                        return <CartProduct _id={item._id} qty={item.qty} price={item.price} img={item.img}
                        remove={remove}
                        title={item.title} key={index}/>
                            })
                        : <Box className='auto center col flex items-center ' sx={{py:5}}>

                        <Box sx={{width:'60px'}}>
                            <img src="https://www.pngitem.com/pimgs/m/480-4803503_your-cart-is-currently-empty-empty-cart-icon.png" alt="Empty Cart Image" className="img" />
                        </Box>
                        <Typography sx={{fontSize:'.98em',width:'80%',py:1,textAlign:'center'}}> 
                      You Cart is Empty, Add Some Products!
                        </Typography>
                        </Box> 
                        }
                        
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        my: 2,
                        mx: 1,
                       flexWrap:'wrap',
                        display:'flex'
                    }}>
                       <Btn 
                       sx={{width:'100%',borderRadius:1}}
                       onClick={()=>{setCartOpen(false),router.push('/checkout')}}
                       disabled={cartItems.length < 1}>
                            Checkout
                       </Btn>
                        <Btn 
                        sx={{
                            width:'100%',borderRadius:1,
                            ':hover':{background:'#1a4671',color:'white'}}}
                        onClick={()=>{setCartOpen(false),router.push('/collection/products')}}
                        v2={true} >
                        Continue Shopping
                        </Btn>
                        <Btn
                        className='text-center auto'
                        sx={{color:'#1a4671',border:'none',':hover':{background:'white',color:'#1a4671'}}} 
                        onClick={()=>{setCartOpen(false),router.push('/cart')}}
                        v2={true} >
                        View Cart Page
                        </Btn>
                    </Box>

                </Box>
            </Drawer>
        </div>
    );
}