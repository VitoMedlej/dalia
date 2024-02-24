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
            let localCart : ICartItem[] = loadState('prodNtX932ux23') || []
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
        saveState('prodNtX932ux23', state);
        setCartItems(state);
    }
    return (
        <div>
            <Drawer  anchor={'right'} open={cartOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                    // maxWidth: '500px',
                    width: '99%',

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
                        maxHeight: '450px',
                        overflowY: 'scroll'
                        
                    }}>
                        {
                           cartItems && cartItems.length > 0 ? cartItems.map((item:ICartItem, index) =>{
                        if (!item?._id) return;
                        return <CartProduct 
                        stock={Number(item?.stock)}
                        productselectedPrice={item?.productselectedPrice}
                        productselectedSize={item?.productselectedSize} _id={item._id} qty={item.qty} price={item.price} img={item.img}
                        remove={remove}
                        title={item.title} key={index}/>
                            })
                        : <Box className='auto center col flex items-center ' sx={{py:5}}>

                        <Box sx={{width:'60px'}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/6533/6533851.png" alt="Empty Cart Image" className="img" />
                        </Box>
                        <Typography sx={{fontSize:'.98em',width:'80%',py:1,textAlign:'center'}}> 
                          You have not added any products.
                        </Typography>
                        </Box> 
                        }
                        
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        margin: '1em auto !important',
                       flexWrap:'wrap',
                        display:'flex',
                        width:{xs:'99%',sm:'400px'},
                    }}>
                       <Btn 
                       sx={{width:'100%',mx:1
                    ,
                    }}
                       onClick={()=>{setCartOpen(false),router.push('/cart')}}
                      >
                            View Cart
                       </Btn>
                        <Btn
                         
                        sx={{
                            width:'100%',
                            mx:1
                    ,
                            color:'black',
                    background:'none',
                          my:1,
                            }}
                        onClick={()=>{setCartOpen(false),router.push('/collection/products')}}
                         >
                        Continue Shopping
                        </Btn>
                 
                    </Box>

                </Box>
            </Drawer>
        </div>
    );
}