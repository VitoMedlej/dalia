"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
import {HiOutlineShoppingBag} from 'react-icons/hi'

import {FormEvent, useContext, useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
// SearchModal from './SearchModal';
import Link from 'next/link';
// import SearchInput from './SearchInput';
import {Badge, Container, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import SideBar from '../Drawer/SideBar';
import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CartContext, DrawerContext} from '@/context/Contexts';
import SearchInput from './SearchInput';
import NavButtom from './NavButtom';

export default function Navbar() {
    const {open, setOpen} = useContext(DrawerContext);
    const [openModal,
        setOpenModal] = useState(false);
    const [localCart,
        setLocalCart] = useState([]);
    const [q,
        setQ] = useState('')
    const {cartOpen, setCartOpen} = useContext(CartContext);
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('usercart2') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])

    const handleSearch = (e : React.FormEvent < HTMLFormElement >) => {
        e.preventDefault()
        if (q.length > 2) {
            router.push(`/category/products?limit=80&search=${q}`)
        }
    }

    return ( <> <Box
        className='bg'
        sx={{
        flexWrap: 'wrap',
        border: 'none',
        flexGrow: 1
    }}>
        <AppBar
            className='bg'
            sx={{
            maxWidth: 'lg',
            margin: '0 auto',
            boxShadow: 'none'
        }}position="static">
            <Toolbar
                className='bg'
                sx={{
                position: 'relative',
                flexWrap: 'wrap'
            }}>
                <Link href='/' color='inherit'>

                    <Box
                        sx={{
                        mx: {
                            sm: '1em'
                        },
                        width: '100px'
                    }}>
                        <img
                            className='img'
                            src={`https://www.ishtari.com/static/media/logo.966a1527.png`}
                            alt="Teen Tops electronics eshop logo"/>
                    </Box>
                </Link>

                <SearchInput
                    onSubmit={function (e : FormEvent < HTMLFormElement >) : void {throw new Error('Function not implemented.');}}
                    value={''}
                    setValue={undefined}/>
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
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                            <Typography
                                sx={{
                                px: '.1em',
                                color: 'white',
                                display: {
                                    xs: 'none',
                                    lg: 'flex'
                                }
                            }}>
                                +961 81826445
                            </Typography>
                            <AiOutlinePhone color='white'/>

                        </IconButton>
                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                            <Badge color='primary' badgeContent={`${localCart.length || '0'}`}>

                                <HiOutlineShoppingBag color='white'/>
                            </Badge>

                        </IconButton>

                        <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                            margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='white'/>
                        </IconButton>
                    </Box>

                </Box>
                <SearchInput
                    mobile
                    onSubmit={function (e : FormEvent < HTMLFormElement >) : void {throw new Error('Function not implemented.');}}
                    value={''}
                    setValue={undefined}/>
            </Toolbar>
        </AppBar>
    </Box> 
   <NavButtom/>
    < Divider color = 'white' />
     </>
    
    );
}