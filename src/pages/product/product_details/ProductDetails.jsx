import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../../hooks/UseProductDetails';
import { Box, Card, CardContent, CardMedia, CircularProgress, Rating, Typography } from '@mui/material';

function ProductDetails() {
  const {id} = useParams();
  const {data,isError,isLoading} = useProductDetails(id);
    if(isLoading) return <CircularProgress/>
    if(isError)
      return <Alert severity='error'>Failed to get data</Alert>
  return <Box sx={{display:'grid',gap:4,justifyItems:'center'}}>
    <Card sx={{maxWidth:450}}>
      <CardMedia component='img' image={data.image}></CardMedia>
      <CardContent>
        <Typography component={'h2'}>{data.name}</Typography>
      </CardContent>
    </Card>
    <Box>
      <Typography>{data.description}</Typography>
      <Typography sx={{color:'gold',fontSize:20,fontWeight:600}}>${data.price}</Typography>
      <Rating readOnly value={data.rate}></Rating>
    </Box>
  </Box>
}

export default ProductDetails