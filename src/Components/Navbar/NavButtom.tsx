import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const NavButtom = () => {
  return (
    <Box
        className='flex   space-evenly'
        sx={{
        width: '100%',
        mx: 0,
        display : {xs:'none',sm:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
                gap:4,
            maxWidth: 'lg',
            overflow:'hidden',
            py:1,

        }}>

            {[
'food and beverages',
'organic food',
'gluten-free food',
'vegan food',
'snacks',
'desserts',


    ].slice(0,6).map(i => {
                return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-')}/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:600,fontSize:'.85em'}}>
                    {i}
                    </Typography>
                </Link>
            })}
        </Container>
    </Box>
  )
}

export default NavButtom