"use client"

import HomeCategoryList from "@/Components/HomeCateogryList/HomeCategoryList"
import MainCarousel from "@/Components/MainCarousel/MainCarousel"
import { Box, Button, Container, Typography } from "@mui/material"


export default function Home() {
  return (
      <Box>
        <Container disableGutters className='wrap' sx={{px:1,maxWidth:'xl',display:'flex'}}>
        <Box sx={{mt:'2em',mr:'.1em',width:{sm:'25%',lg:'19%'},flexDirection:'column',display:{xs:'none',md:'flex'}}}>
        <Box className='bg white' sx={{
                px:1,
                py:2,width:'100%',background:'white'}}>
              
                <Typography sx={{fontWeight:'500',px:1}}>
                  All Categories
                </Typography>
             
              </Box>
            {[1,2,3,4].map(i=>{
              return <Box className='flex shadow cursor' sx={{
                px:1,
                py:2,width:'100%',background:'white'}}>
                <Box sx={{height:'20px',width:'20px'}}>
                <img src="https://itaouielectronics.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-01-at-15.13.55-1-150x150.jpg" alt="" className="img" />
               </Box>
                <Typography sx={{fontWeight:'500',px:1}}>
                  Item foo
                </Typography>
             
              </Box>
            })}
          </Box>
          <MainCarousel/>
         
          <Box className='wrap gap1 justify-center' sx={{display:{xs:'flex',sm:'none'}}}>
            <Typography sx={{width:'100%',fontWeight:'600',py:1}}>
              Browse Collections
            </Typography>
            {[1,2,3,4,5,6,7,8].map(i=>{
                return <Box className='cursor' sx={{width:{xs:'23%'}}}>
                        <img src="https://www.ishtari.com/image/data/system_banner/10000/2400/2208/appliances.png" alt="" className="img" />
                 
                </Box>
            })}
          </Box>
            <Box sx={{my:4}}>
            <Typography
                className='sectionTitle box'
                sx={{
             
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
                Explore Different Categories
            </Typography>
              <Box sx={{mb:2}} className='flex wrap gap1 justify-center'>
                  {[1,2,3,4,5,6,6,7].map(i=>{
                      return <Box className='hover-shadow cursor trans' sx={{py:1,width:{xs:'49%',sm:'24%'}}}>
                          <Box>
                            <img src="https://itaouielectronics.com/wp-content/uploads/2022/05/Product-14-1.jpg" alt="" className="img" />
                          </Box>
                          <Box className='text-center'>
                            <Typography sx={{fontSize:'.8em',fontWeight:'500'}}>
                              Some Title yo yo
                            </Typography>
                            <Typography sx={{fontWeight:'200',fontSize:'.76em'}}>
                              category
                            </Typography>
                            <Typography className='clr' sx={{fontWeight:'600',fontSize:'.76em'}}>
                              129$
                            </Typography>
                           
                          </Box>
                      </Box>
                  })}
              </Box>
            </Box>

            <HomeCategoryList/>
        </Container>
      </Box>
  )
}
