import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../../hooks/UseProductDetails';
import { CircularProgress } from '@mui/material';

function ProductDetails() {
  const {id} = useParams();
  const {data,isError,isLoading} = useProductDetails(id);
    if(isLoading) return <CircularProgress/>
    if(isError)
      return <Alert severity='error'>Failed to get data</Alert>
  console.log(data);
  return <>
  
  </>
}

export default ProductDetails