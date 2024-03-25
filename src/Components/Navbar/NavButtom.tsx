"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
// import MenuHover from './MenuHover'





const NavButtom = () => {

  return (
    <Box
        className=' wrap bg black space-evenly'
        sx={{
            flex:1,
            borderTop:'1px solid #00000026',
            width:'100%'
,            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
            justifyContent: 'flex-start',
            maxWidth: 'lg',
            overflow:'hidden',
            py:2.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link className=' hovereffect clr ' href={`/collection/products`}>

                <Typography 
        component='h1'
        className=' cursor center  flex gap1   captialize'
        id="button"
        sx={{width:'max-content',
        mx:'.75em',
        alignItems: 'center',
        color:'white',
        fontWeight:400,fontSize:{xs:'.86em',sm:'.99em'}}}>
Collections
</Typography>
</Link>


{
   [
    'Labneh','Keshek',
    'Beverages',
    'Mouneh',
    'Olives & Olive Oil',
    'Sweets & Nuts',
  ].map(i=>{
        return <Link
        
        
        key={i} className=' clr hovereffect  black ' href={`/${i.toLocaleLowerCase()}/products`}>

        <Typography 
        component='h1'
        className=' cursor center flex gap1   captialize'
        id="button"
        sx={{width:'max-content',
        mx:'.75em',
        alignItems: 'center',
        color:'white',
        fontWeight:400,fontSize:{xs:'.86em',sm:'.99em'}}}>
        {i}
        </Typography>
        </Link>
    })
}

{/* <Link className='black decor-none ' href={`/organic herbs/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'
id="button"
component='p' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.8em'}}}>
Organic Herbs
</Typography>
</Link>
<Link className='black decor-none ' href={`/natural supplements/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'
id="button"
component='p' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.8em'}}}>
Natural Supplements
</Typography>
</Link> */}



{/* <Link className='black decor-none ' href={`/about`}>

<Typography 
className=' cursor center flex gap1 black decor-none '
id="button"
component='p' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.8em'}}}>
About Us
</Typography>
</Link> */}

{/* <Link className='black decor-none uppercase' href={`/new-arrivals/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none uppercase'
id="button"
component='p' sx={{width:'max-content',
alignItems: 'center',
mx:'1em',

fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
New Arrivals
</Typography>
</Link> */}
                {/* <Link className='black decor-none uppercase' href={`/birds/products`}>

                <Typography 
      className=' cursor center flex gap1 black decor-none uppercase'
        id="button"
        component='p' sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        
        fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
     Birds
   </Typography>
   </Link> */}
           

            {/* { [
    {cate:"Categories",subCate:catsSubcategories,img:`https://th.bing.com/th/id/R.1776ae53615a64b359d8d65cf5eca544?rik=WKeDBh1pbwPftA&riu=http%3a%2f%2fwww.kmart.com.au%2fwcsstore%2fKmart%2fimages%2fespots%2fpets-beds-050418-tall-banner.jpg&ehk=fwMSwpMwGOLad6eRmrG%2bT48oAdH2G7Y8Mm2thOjl3Zk%3d&risl=&pid=ImgRaw&r=0`},
    // {cate:"Dogs",subCate:dogsSubcategories,img:`https://mypetguru.com/imgs/uploads/toy-for-dog.jpg`},
    // {cate:"Offers",subCate:offersSubcategories,img:'https://i.pinimg.com/originals/bf/cb/59/bfcb59f20bddc43101e39de2cc142f7e.jpg'}
].map(i => {
                // return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-').toLocaleLowerCase()}/products`}>
                //     <Typography  component='p' sx={{width:'max-content',fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>                    
                //     {i}
                //     </Typography>
                // </Link>
                return  <MenuHover img={i.img} key={i.cate} category={i.cate} subcategories={i.subCate}/>
            })} */}


        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavButtom