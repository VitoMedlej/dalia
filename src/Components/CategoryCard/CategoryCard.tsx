import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Btn from '../Btn/Btn';

const CategoryCard = ({ imageUrl, categoryName } : any) => {
  return (
    <Card sx={{boxShadow:'none',mt:2,mx:1,borderRadius:'4px',border:'none', maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        sx={{boxShadow:'none',border:'none',borderRadius:'4px',}}
        image={imageUrl}
        alt={categoryName}
      />
      <CardContent sx={{boxShadow:'none',border:'none', borderRadius:'4px',bgcolor: '#f4f4f4' }}>
        <Typography gutterBottom className='text-' sx={{pb:1,fontWeight:600}} variant="h5" component="div">
          {categoryName}
        </Typography>
        <Btn sx={{mt:1}}  className='w100'>
          Show More
        </Btn>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
