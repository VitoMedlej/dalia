"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
import {HiOutlineShoppingBag} from 'react-icons/hi'

import {FormEvent,  useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
// SearchModal from './SearchModal';
import Link from 'next/link';
// import SearchInput from './SearchInput';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import SideBar from '../Drawer/SideBar';
import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import SearchInput from './SearchInput';
import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';

export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    // const [openModal,
    //     setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('cart-items') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <> <Box
    className='center auto flex'
        sx={{
        flexWrap: 'wrap',
        background:'white',
        border: 'none',
        flexGrow: 1
    }}>
        <Box className='flex bg white gap1 align-center items-center w100 center' sx={{py:.45}} >
            <Typography sx={{}}>
                hello world
            </Typography>
                   <Typography
                                sx={{
                                
                                px: '.1em',
                                // color: 'black',
                                display : {
                                    xs: 'none',
                                    lg: 'flex'
                                }
                            }}>
                               +{process.env.NEXT_PUBLIC_WA}
                            </Typography>
        </Box>
        <AppBar
    className='center auto flex'

            sx={{
                background:'white',
            maxWidth: 'lg',
            margin: '0 auto',
            boxShadow: 'none'
        }}position="static">
            <Toolbar
    className='center  flex w100 '

                sx={{
                background:'white',
                position: 'relative',
                px:'0 !important',
                flexWrap: 'wrap'
            }}> 
                    <Box
                    sx={{
                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                        sm: 'end'
                    },
                    display: 'flex'
                }}>

                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        justifyContent: 'end'
                    }}
                        className='flex right'>
 
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                            <Badge color='primary' badgeContent={`${localCart.length || '0'}`}>

                                <HiOutlineShoppingBag color='black'/>
                            </Badge>

                        </IconButton>
   <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a>
                    
                    </Box>

                </Box>
                <Link className='flex center aling-center items-center auto' style={{flex:1}} href='/' color='inherit'>

                    <Box
                        sx={{
                        mx: {
                            sm: '1em'
                        },
                        width: '100px'
                    }}>
                        <img
                            className='img'
                            src={`https://ucarecdn.com/ea97c4e8-1111-4d33-a2ec-e4edad0f0ab8/WhatsAppImage20230627at170849.jpeg`}
                            alt="Teen Tops electronics eshop logo"/>
                    </Box>
                </Link>

             
             
                <SearchInput
                    // onSubmit={function (e : FormEvent < HTMLFormElement >) : void {throw new Error('Function not implemented.');}}
                    // value={''}
                    // setValue={undefined}
                    />
                <SearchInput
                    mobile
                    // onSubmit={handleSearch}
                    // value={value}
                    // setValue={setValue}
                    
                    
                    />
            </Toolbar>
        </AppBar>
    </Box> 
   <NavButtom/>
    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}