import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
// import MenuHover from './MenuHover'
import { categories } from './Navbar'



const NavButtom = () => {

  return (
    <Box
        className=' wrap  space-evenly'
        sx={{
            flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
                gap:{xs:1.5,sm:1.75,md:2},
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
            {categories.slice(0,6).map(i => {
                return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-').toLocaleLowerCase()}/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    {i}
                    </Typography>
                </Link>
                // return  <MenuHover key={i} category={i} subcategories={['test','test2']}/>
            })}
        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavButtom