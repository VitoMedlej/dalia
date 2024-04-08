"use client"
import { Container,Grid, Typography, Box } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import EmailForm from './EmailForm'

const SignUp = () => {
  return (
    <Grid className='flex  items-center auto' sx={{justifyContent:'space-between'
    ,py:4,background:'#f6f6f6 !important',
    }} container>
      <Container  className='flex auto wrap  items-center' sx={{
        flexDirection:{xs:'column',sm:'row '}
,          maxWidth:'lg'}}>
        <Grid   item xs={12} sm={6}>
          <Typography
          className='clr'
          sx={{color:'white',fontSize:'2em',fontWeight:'bold'}}>
        Subscribe to our newsletter and never miss a discount!</Typography>
         
        </Grid>
        <Grid sx={{mt:{xs:2,sm:0}}} className="flex center items-center row wrap "
         item xs={12} sm={6}>
       <EmailForm/>
        </Grid>
        </Container>

      </Grid>
  )
}

export default SignUp