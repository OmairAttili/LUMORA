import React from 'react'
import { Box, Container, Alert, CircularProgress, Chip } from '@mui/material';
import { useCategory } from '../../hooks/UseCategory';

function Home() {
  const {data,isLoading,isError} = useCategory()
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