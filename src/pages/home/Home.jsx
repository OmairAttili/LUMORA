import React from 'react'
import { Box, Container, Alert, CircularProgress, Chip } from '@mui/material';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function Home() {
  const getCategories = async()=>{
    const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`,{headers:{
      'Accept-Language':"en"
    }});
    return response.data.response.data;
  }
  const {data,isLoading,isError,error}=useQuery({
    queryKey:["Categories"],
    queryFn:getCategories,
    staleTime:60*1000*15
  })
  console.log(data)
  if(isLoading) return <CircularProgress/>
  
  if(isError)
    return <Alert severity='error'>Failed to get Category</Alert>
  return <Box>
    <Container>
      <Box sx={{textAlign:'start'}}>
        {data.map((category)=>{
          return <Chip label={category.name} variant="outlined" />
        }
          )}
      </Box>
    </Container>
  </Box>
}

export default Home