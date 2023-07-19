import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const NavButtom = () => {
  return (
    <Box
        className='flex wrap  space-evenly'
        sx={{
        width: '100%',
        mx: 0,
        display : {xs:'none',sm:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
                gap:{xs:1.5,sm:3,md:4},
            maxWidth: 'lg',
            overflow:'hidden',
            py:1,

        }}>
<Link className='clr decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:600,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link>
            {[
'girl',
'boy',
'baby girl',
'baby boy',
'adult matching outfits'


    ].slice(0,6).map(i => {
                return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-')}/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:600,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    {i}
                    </Typography>
                </Link>
            })}
        </Container>
    </Box>
  )
}

export default NavButtom