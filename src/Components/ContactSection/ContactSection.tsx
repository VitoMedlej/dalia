"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'



import {AiOutlineWhatsApp,AiOutlineInstagram} from 'react-icons/ai'
// import EmailInput from './EmailInput'
const Perks = () => {
    return (
        <Box
            className='flexed bg'
            sx={{
                mt: '5em',
                flexWrap: 'wrap',
                // background:'#f0f0f0',
                py: '1.5em',
                justifyContent: 'space-evenly',
                width: '100%',
                color: 'white'
            }}>
            <Box
                className='flex'
                sx={{
                    padding:2,

                    textAlign: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                {/* <Typography sx={{
                    fontWeight: '600',
                    fontSize: '1.7em'
                }}>
                 Sign Up For Our News Letter
                </Typography> */}
                {/* <EmailInput/> */}
                <Typography
                    className='white'
                    sx={{
                        fontSize: '.8em'
                    }}>Reach out to us through any of these support channels</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1em' }}>
                {/* {[{title:'Phone Number',value:"70873045",isLink:false}, {isLink:true,title:'Instagram',value:'https://www.instagram.com/power_house_european/'}, {isLink:true,title:'Facebook',value:'https://www.facebook.com/online.european.outlet/'}].map(i => {
                    return 
                })} */}

                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                    <Box className='flexed'>
                        <AiOutlineInstagram  color= '#fff' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        {<a className='white' target={`_blank`} rel='noreferrer' style={{textDecoration:"none"}} href={"https://www.instagram.com/pets_town_lb/?igshid=MzRlODBiNWFlZA%3D%3D"}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Instagram</Typography>
                        </a>

                        }
                    </Box>

                </Box>


{/* 
                <Box

sx={{
    display: 'flex',
    gap: '.5em',
    flexDirection: 'row'
}}>
<Box className='flexed' sx={{width:'30px',color:'white',filter:'invert(1)'}}>
 
     <img src="https://cdn-icons-png.flaticon.com/512/1946/1946552.png" alt="" className="img" />
</Box>
</Box> */}


                {/* <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        flexDirection: 'row'
                    }}>
                    <Box className='flex items-center'>
                        <AiFillFacebook color='#fff' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        {<a className='white' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={"https://www.facebook.com/namliieh/"}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Facebook</Typography>
                        </a>

                        }
                    </Box>

                </Box> */}


                <Box

                    sx={{
                        display: 'flex',
                        gap: '.5em',
                        flexDirection: 'row'
                    }}>
                    <Box className='flex items-center'>
                        <AiOutlineWhatsApp  color= '#fff' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                        {<a className='white' target={`_blank`} style={{textDecoration:"none"}} rel='noreferrer' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`}>


                            <Typography
                                sx={{
                                    fontSize: '1.1em'
                                }}>Whatsapp</Typography>
                        </a>

                        }
                    </Box>

                </Box>






            </Box>
        </Box>
    )
}

export default Perks