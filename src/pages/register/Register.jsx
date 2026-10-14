import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DevicesIcon from '@mui/icons-material/Devices';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Register() {
  return <Box>
    <Container>
      <Box sx={{backgroundColor:'#F5F2FF',borderRadius:3,px:2,py:1.25,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',alignItems:'center',gap:1}}>
        <CircleIcon sx={{fontSize:10,color:'#2E7D32'}}/>
        <Typography component={'h2'} variant='h6' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600}}>REGISTRATION PORTAL</Typography>
        <CircleIcon sx={{fontSize:5,color:'#C7C5D4'}}/>
        <Typography component={'h2'} variant='h6' sx={{fontFamily:'Inter',fontSize:12,color:'#6E6D7A'}}>v2.4 Secured Gateway</Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',gap:1}}>
        <Box sx={{backgroundColor:'white',borderRadius:100,display:'flex',alignItems:'center',gap:0.75,px:1.25,py:0.5}}>
          <DevicesIcon sx={{color:'#272387',fontSize:12,opacity:'100%'}}/>
          <Typography component='h2'variant='h6'sx={{fontSize:11,color:'#6E6D7A',fontFamily:'Inter'}}>Adaptive: 1440px / 768px / 390px</Typography>
        </Box>
        <Box sx={{backgroundColor:'white',borderRadius:100,display:'flex',alignItems:'center',gap:0.75,px:1.25,py:0.5, color:'#2E7D32'}}>
          <LockOutlinedIcon sx={{fontSize:12,opacity:'100%'}}/>
          <Typography component='h2'variant='h6'sx={{fontSize:11,fontFamily:'Inter'}}>256-Bit SSL Active</Typography>
        </Box>
        </Box>
      </Box>
    </Container>
  </Box>
}

export default Register