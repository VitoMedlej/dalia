"use client"

import MainCarousel from "@/Components/MainCarousel/MainCarousel"
import { Box, Container, Typography } from "@mui/material"


export default function Home() {
  return (
      <Box>
        <Container sx={{maxWidth:'xl',display:'flex'}}>
        <Box sx={{display:{xs:'none',md:'flex'},width:'200px'}}>
            {[1,2,3,4].map(i=>{
              return <Box sx={{}}>
                <Typography>
                  Item foo
                </Typography>
                <img src="https://itaouielectronics.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-01-at-15.13.55-1-150x150.jpg" alt="" className="img" />
              </Box>
            })}
          </Box>
            <MainCarousel/>
       
        </Container>
      </Box>
  )
}
