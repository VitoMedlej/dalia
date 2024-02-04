"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';

import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



export const categories =   [
    'Labneh','Keshek',
    'Beverages',
    'Honey, Jams & Spreads',
    'Mouneh',
    'Olives & Olive Oil',
    'Sweets & Nuts',
    'Zaatar',
  ]
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
        // const cart = loadState('prodNtX932ux') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])
    const {text} = useLanguage()

    const {lang,setLang} = useLangContext()
    return ( <>
     <Box
     id='navy'
    className='center auto relative   bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{

                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
            {/* <Box className='center text-center' sx={{background:'#0f0f0f',width:'100%',py:.25}}>
                <Typography className='clr' component='h1' sx={{py:.2,fontSize:{xs:'.75em',sm:'.75em'}}}>
            FREE DELIVERY FOR ORDERS ABOVE $40. CASH ON DELIVERY. USD AT DAILY MARKET RATE.
                </Typography>
            </Box> */}
            <Toolbar
     id='navy3'

    className='center relative  flex  col w100  auto'

                sx={{
                
                background:'white',
                    maxWidth:'xl',
                px:'0 !important',
                mx:{xs:1},
                flexWrap: 'wrap'
            }}> 
            <Box 
            sx={{
                justifyContent: {xs:'space-between',md:'center'},
            }}
            className='flex wrap items-center w100  '> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        xs: '.15em',
        sm: '1em'
    },
    my:1,
    width:{xs:'90px',md: '100px'}
}}>
    <img
        className='img contain'
        src={`https://ucarecdn.com/9304db51-1509-447d-b8e4-c87d0b8c11c2/408031158_664465732546685_227633461073843326_n.jpg`}
        alt="Mounet Dalia logo"/>
</Box>

</Link>
<Box className='flex'>



                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
    className=' gap gap1'
                            sx={{
                                display:{xs:'flex',md:' none'},
                                margin : '8px',
                                
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <CiShoppingCart color='black'/>
                            {/* </Badge> */}
                          
                        </IconButton>
                        <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>



                        </Box>
                        

<SearchInput/>
<Btn
                            onClick={() => setCartOpen(!cartOpen)}
    className=' gap gap1'
                            sx={{
                                display:{xs:'none',md:'flex'},
                                margin : '8px',
                                
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <CiShoppingCart fontSize={'2em'} color='white'/>
                            {/* </Badge> */}
                            <Typography>
                                My Cart
                                </Typography>
                        </Btn>
</Box>







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
                             
                        
                             
                             {/* <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                        }}>
                            {text('العربية','English')}
                        </Btn> */}
                        {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}
                   
   
                   
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


  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
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
 

                               {/* <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                        }}>
                            {text('English','Arabic')}
                        </Btn> */}
                       

                    



                            {/* <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                            // margin: '0.1em',
                         
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton> */}
                    
                    </Box>

                </Box>
           
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
<Divider></Divider>

<NavButtom/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}