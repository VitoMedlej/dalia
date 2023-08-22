"use client"
import { Box, Container } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const Index = ({route}:{route?:string}) => {
    const router= useRouter()
    return (
    <Container className='cursor' onClick={()=>router.push(route || '/')} disableGutters>
        <Box sx={{maxHeight:'500px'}}>
            <img src="https://www.ishtari.com/image/data/system_banner/10000/1800/1673/outdoor-new.png" alt="Ad Poster" className="img" />
        </Box>
    </Container>
  )
}

export default Index