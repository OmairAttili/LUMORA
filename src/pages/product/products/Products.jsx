import React from 'react'
import { useProduct } from '../../../hooks/UseProduct'
import { Alert, Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Rating, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

function Products() {
  const {data,isLoading,isError} = useProduct();
  if(isLoading) return <CircularProgress/>
  if(isError)
    return <Alert severity='error'>Failed to get Products</Alert>
  return <Box sx={{display:'grid',gap:2,gridTemplateColumns:{xs:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(4,1fr)'},alignContent:'center',justifyContent:'center',justifyItems:'center'}}>
  {data.map((product)=>(
    <Card component={Link} to={`${product.id}`}>
      <CardActionArea>
      <CardMedia component={'img'} image={product.image} alt={product.name}>
      </CardMedia>
      <CardContent>
        <Typography>{product.name}</Typography>
        <Rating readOnly value={product.rate}></Rating>
        <Typography>{product.price}</Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  ))}
  </Box>
}

export default Products