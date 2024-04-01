import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Btn from '../Btn/Btn';

const CategoryCard = ({ imageUrl, categoryName,className } : any) => {
  return (
    <Box 
    className={`relative op0 y1 carditem ${className}`}
    sx={{boxShadow:'none',mt:2,borderRadius:'4px',border:'none', width: {xs:'100%',sm:'48%',md:'32%'},
    height: {xs:'240px',sm:'250px',md:'280px'} }}>

      <Box sx={{overflow:'hidden',width:'100%',height:'100%'}} className="absolute cateimg">
        <img style={{borderRadius:'10px'}} src={imageUrl} alt="" className="img" />
      </Box>
  
      <Box sx={{background:'black',borderRadius:'10px',opacity:0.25}} className="absolute img">

      </Box>
      <Box className="catecard relative">
      <Typography gutterBottom className='text-' sx={{pb:.1,pt:.5,fontWeight:300}} variant="h6" component="div">
      Get extra 50% OFF
</Typography>
<Typography gutterBottom className='text-' sx={{pb:1,fontWeight:600}} variant="h4" component="div">
  {categoryName}
</Typography>
<Btn v2 sx={{
  padding:0,
  justifyContent:'left',
  textDecoration:'underline',
  fontSize:'.8em',
  ':hover':{background:'none',color:'#84a545',
  textDecoration:'underline',

},
  mt:{xs:2,sm:'20%'},
  border:'none'}}  className='w100'>
  Show More
</Btn>
</Box>
        </Box>

  );
};

export default CategoryCard;
