import React, { useState } from 'react'
import { alpha, Box, Container, Typography,Button, Divider} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Google from '../../assets/images/Google.png'
import Apple from '../../assets/images/Apple.svg'
import DevicesIcon from '@mui/icons-material/Devices';
import LoginForm from './LoginForm';
import LeftSide from './LeftSide';


function Login() {

  return <Box sx={{backgroundColor:'#FCF8FF', fontFamily:'Inter'}}>
    <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:4}}>
      <LeftSide/>
        <Box sx={{width:{lg:'50%',xs:'100%'},marginTop:3,backgroundColor:alpha('#FFFFFF',0.2),boxShadow:3,py:5,px:{xs:2,sm:5},borderRadius:2}}>
          <Box sx={{marginBottom:3}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <Box sx={{display:'flex',alignItems:'center',gap:0.75,backgroundColor:'#E8E6FE',color:'#272387',px:1.25,py:0.5,borderRadius:1.5}}>
                <LockOutlinedIcon sx={{width:12,height:16,}}/>
                <Typography component={"span"} sx={{fontSize:11,letterSpacing:0.33,fontWeight:600}}>Secure Authentication</Typography>
              </Box>
              <Box sx={{display:'flex',alignItems:'center',gap:0.75,backgroundColor:'#F7F8FC',color:'#6E6D7A',px:1.25,py:0.5,borderRadius:50}}>
                <DevicesIcon sx={{width:12,height:14,}}/>
                <Typography component={"span"} sx={{fontSize:11,letterSpacing:0.33,fontWeight:500}}>Responsive Web</Typography>
              </Box>
            </Box>
            <Typography component="p" sx={{fontSize:28,fontWeight:700,fontFamily:'Outfit',letterSpacing:0.7}}>Welcome Back to LUMORA</Typography>
            <Typography component="p" sx={{fontSize:15,fontFamily:'Inter',letterSpacing:0.7,color:"#6E6D7A"}}>Enter your credentials to access your orders, wishlist, and exclusive rewards.</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',gap:1.5,marginBottom:3,flexWrap:{xs:'wrap',sm:'nowrap'}}}>
           <Button sx={{width:{sm:'50%',xs:'100%'},backgroundColor:'#F7F8FC',py:1.5,borderRadius:1.5,display:'flex',alignItems:'center',gap:3,boxShadow:1}}>
            <img src={Google} alt='google'/>
            <Typography sx={{fontSize:14,fontFamily:'Inter',fontWeight:600,color:'#1A1A2B'}}>Continue with Google</Typography>
           </Button> 
           <Button sx={{width:{sm:'50%',xs:'100%'},backgroundColor:'#F7F8FC',py:1.5,borderRadius:1.5,display:'flex',alignItems:'center',gap:3,boxShadow:1}}>
            <img src={Apple} alt='Apple'/>
            <Typography sx={{fontSize:14,fontFamily:'Inter',fontWeight:600,color:'#1A1A2B',}}>Continue with Apple</Typography>
           </Button> 
          </Box>
          <Box sx={{display:'flex',alignItems:'center',marginBottom:3}}>
            <Divider sx={{borderColor:'#E8E6FE',height:1,flex:1}}/>
            <Typography sx={{fontFamily:'Inter',fontSize:11,fontWeight:500,letterSpacing:1.1,color:'#6E6D7A',marginX:2}}>OR WITH EMAIL</Typography>
            <Divider sx={{borderColor:'#E8E6FE',height:1,flex:1}}/>
          </Box>
          <LoginForm/>
      </Box>
    </Container>
  </Box>
}

export default Login