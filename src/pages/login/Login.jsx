import React from 'react'
import { Box, Container} from '@mui/material';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


function Login() {

  return <Box sx={{backgroundColor:'#FCF8FF', fontFamily:'Inter'}}>
    <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:4}}>
      <LeftSide/>
      <RightSide/>  
    </Container>
  </Box>
}

export default Login