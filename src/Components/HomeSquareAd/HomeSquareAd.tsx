import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'

const HomeSquareAd = ({center,reversed,fullscreen,img,title,description,btnTitle}:{
    fullscreen?:boolean,
    center?:boolean,
 
    btnTitle?:string,title?:string,description?:string,img:string,reversed?:boolean}) => {
    const router = useRouter()
  
    return (
    <Grid maxWidth={fullscreen? 'none':'lg'}  sx={{background:'#f2f2f2',flexDirection:{xs:'row',sm:'row'}}} className={reversed ? 'row ' : 'row-reversed '} container>
        <Grid  item xs={12} md={6}>
            <Box sx={{textAlign:center?'center':'left',px:{xs:1,sm:2},color:'black',height:{xs:'500px',sm:'100%',md:'600px'}}} className={`flex  ${center ? 'text-center' : ''} bg2 center col auto`}>
          
            <Typography className='black'  sx={{py:.25,fontSize:{xs:'3.5em',sm:'4em'},fontWeight:'500'}} component='h2'>
               {title || 'Cute Baby Clothes💖'}
            </Typography>
            <Typography sx={{maxWidth:'sm'}} className='black' component='p'>
           {description || `Our collection of baby clothes is sure to have something cute and comfortable for your little one. Whether you're looking for an adorable dress or a cozy romper, our clothes are made with soft and breathable fabric.`}
            </Typography>
          

            <Btn
                            onClick={() => router.push('/collection/products')}
            
            sx={{color:'#1888d7',margin:center ? '2em auto':'2em 0',width:'200px',background:'transparent',borderRadius:1,border:'1px solid #1888d7'}} >
            {btnTitle || 'Try it Now'} 
            </Btn>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box sx={{height:{xs:'500px',sm:'100%',md:'600px'}}}>
                <img style={{}} src={img} alt="" className="img" />
            </Box>
        </Grid>
    </Grid>
  )
}

export default HomeSquareAd