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
               {title || 'Iced Coffee ☕️'}
            </Typography>
            <Typography sx={{maxWidth:'sm'}} className='black' component='p'>
           {description || 'Start your day off right with our refreshing iced coffee. Made with freshly brewed coffee and served over ice, it’s the perfect pick-me-up to help you tackle the day ahead.'}
            </Typography>
          

            <Btn
                            onClick={() => router.push('/collection/products')}
            
            sx={{color:'black',margin:center ? '2em auto':'2em 0',width:'200px',background:'transparent',borderRadius:1,border:'1px solid'}} >
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