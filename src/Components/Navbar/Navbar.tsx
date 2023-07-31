"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'

import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';

export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('list-bag') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <> <Box
    className='center auto flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',

        background:'white',
        border: 'none',
        position : 'fixed',
        flexGrow: 1
    }}>
        <Box className='flex bg white gap1 align-center items-center w100 center' sx={{py:.45}} >
            <Typography sx={{fontSize:{xs:'.7em',sm:'.8em'}}} className='center text-center'>
              Delivery All Over Lebanon |  whatsapp📲: +961 76069567
            </Typography>
                   {/* <Typography
                                sx={{
                                
                                px: '.1em',
                                // color: 'black',
                                display : {
                                    xs: 'none',
                                    lg: 'flex'
                                }
                            }}>
                               +{process.env.NEXT_PUBLIC_WA}
                            </Typography> */}
        </Box>
        <AppBar
    className='center relative  flex'

            sx={{


                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
            boxShadow: 'none'
        }}>
            <Toolbar
    className='center  flex w100 '

                sx={{
                    
                background:'white',
             
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex  aling-center items-center '  href='/' color='inherit'>

<Box
    sx={{
    mx: {
        sm: '1em'
    },
    width:{xs:'90px',sm: '120px'}
}}>
    <img
        className='img'
        src={`/icon.png`}
        alt="the craft room logo"/>
</Box>
</Link>
<NavButtom/>

               
            

               

                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'none'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            padding : '8px',
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
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <CiShoppingCart color='black'/>
                            {/* </Badge> */}
                            {/* <Typography>
                                Cart
                            </Typography> */}
                        </IconButton>
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
 <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton>
                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                            <Badge color='primary' badgeContent={`${localCart.length || '0'}`}>
                                <CiShoppingCart color='black'/>
                            </Badge>
                            {/* <Typography>
                                Cart
                            </Typography> */}
                            </IconButton>


                            <IconButton
                            onClick={() => setOpen(!open)}
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
                    
                    </Box>

                </Box>
             <SearchInput
mobile
                    /> 
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}