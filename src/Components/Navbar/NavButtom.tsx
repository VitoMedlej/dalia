import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const NavButtom = () => {
  return (
    <Box
        className='flex   space-evenly'
        sx={{
        width: '100%',
        mx: 0
    }}>
        <Container
            className='flex   '
            sx={{
                gap:7,
            maxWidth: 'lg',
            overflow:'hidden',
            py:1,
        }}>

            {[1, 2, 3, 4].map(i => {
                return <Link className='clr decor-none uppercase' key={i} href='/'>
                    <Typography component='p' sx={{fontWeight:600}}>
                        nameer
                    </Typography>
                </Link>
            })}
        </Container>
    </Box>
  )
}

export default NavButtom