"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import {IoIosMenu} from 'react-icons/io'
// import {IoIosCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';

import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
// import {CiSearch} from 'react-icons/ci'
// import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useCategoriesContext, useDrawerContext, useLangContext } from '@/context/Contexts';
// import Btn from '../Btn/Btn';
// import useLanguage from '@/Hooks/useLanguage';
// import { IoIosCart } from "react-icons/io";


// export const categories =   [
//     'Labneh','Keshek',
//     'Beverages',
//     'Honey, Jams & Spreads',
//     'Mouneh',
//     'Olives & Olive Oil',
//     'Sweets & Nuts',
//     'Zaatar',
//   ]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    // console.log('open: ', open);
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

        
        const {categories} = useCategoriesContext();
        console.log('categories: ', categories);


    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('prodNtX932ux23') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])

    return ( <>
          <Box className='center bg2 text-center' sx={{background:'white',py:.25}}>
                <Typography className='white' component='h1' sx={{px:.65,
                // ,color:'#0f0f0f'
                fontWeight:600
                ,py:.32,fontSize:{xs:'.65em',sm:'.75em'}}}>
            FREE DELIVERY FOR ORDERS ABOVE $40. CASH ON DELIVERY. USD AT DAILY MARKET RATE.
                </Typography>
            </Box>
            <Divider></Divider>
     <Box
     id='navy'
    className='center auto relative    flex'
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
            maxWidth: 'lg',
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
                    maxWidth:'lg',
                px:'0 !important',
                mx:{xs:1},
                flexWrap: 'wrap'
            }}> 
            <Box 
            sx={{
                justifyContent: {xs:'space-between',md:'space-between'},
                maxWidth:'lg',
            }}
            className='flex wrap items-center w100  '> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        xs: '.25em',
        sm: '1em'
    },
    my:1,
    width:{xs:'90px',md: '100px'}
}}>
    <img
        className='img contain'
        src={`https://ucarecdn.com/0abc6c11-ea28-433b-a205-e289be0e95f8/WhatsAppImage20240203at1050571.jpeg`}
        alt="Mounet Dalia logo"/>
</Box>

</Link>
{/* <Box className='flex'>



                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
    className=' gap gap1'
                            sx={{
                                display:{xs:'flex',md:' none'},
                                margin : '8px',
                                
                        }}>

                                <IoIosCart color='black'/>
                          
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



                        </Box> */}
<SearchInput />
                        

    <Box sx={{width:'max-content'}} className="flex flex1 flex-end">

    <Box 
    onClick={()=>setOpenModal(true)}
            
                    
            className='cursor pointer  center items-center' sx={{width:'22px',minWidth:'20px'
            ,padding:1,
            display:{xs:'flex',md:'none'}
            
            }}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" className="img contain" />
            </Box>


            <Box 
    onClick={()=>router.push('/account/login')}
            
            
            className='cursor pointer flex center items-center' sx={{width:'22px',minWidth:'20px'
            ,padding:1
            
            }}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="" className="img contain" />
            </Box>
       

      
            <Box
                onClick={()=>setCartOpen(!cartOpen)}
            className='cursor pointer flex center items-center' sx={{width:'22px',minWidth:'20px'
            ,padding:1
            
            }}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/2636/2636890.png" alt="" className="img contain" />
            </Box>


      
            <Box
               onClick={()=>setOpen(!open)}
            className='cursor pointer  center items-center' sx={{width:'22px',minWidth:'20px',
            
            padding:1,
                display: {xs:'flex',md:'none'},
        }}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/10513/10513594.png" alt="" className="img contain" />
            </Box>

            <Box
               onClick={()=>router.push('/profile')}
            className='cursor pointer  center items-center' sx={{width:'22px',minWidth:'20px',
            
            padding:1,
                display: {xs:'none',md:'flex'},
        }}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/11230/11230790.png" alt="" className="img contain" />
            </Box>
   
        </Box>

{/* <SearchInput mobile={true}/> */}

{/* <Btn
                            onClick={() => setCartOpen(!cartOpen)}
    className=' gap gap1'
                            sx={{
                                display:{xs:'none',md:'flex'},
                                margin : '8px',
                                
                        }}>
                            My Cart

                                <IoIosCart fontSize={'2em'} color='white'/>
                        </Btn> */}
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

             
            </Toolbar>
        </AppBar>
    </Box> 
<NavButtom categories={categories}/>

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}