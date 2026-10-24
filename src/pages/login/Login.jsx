import React, { useState } from 'react'
import { alpha, Box, Container, Typography,Button, Divider,InputAdornment, Checkbox,OutlinedInput ,Link, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Google from '../../assets/images/Google.png'
import Apple from '../../assets/images/Apple.svg'
import LoginIcon from '@mui/icons-material/Login';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import { FormState, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


function Login() {
  const LoginSchema = yup.object({
    email:yup.string().required('Email is required').email("Invalid email format"),
    password:yup.string().required('Password is required')
    .matches(/[A-Z]/,"Password must be contain a capital letter")
    .matches(/[a-z]/,"Password must be contain a small letter")
    .matches(/[0-9]/,"Password must be contain a number")
    .min(8,"password must be at least 8 char"),
  })
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    resolver:yupResolver(LoginSchema),mode:'onBlur'
  })
  const navigate = useNavigate();
  const [success,setSuccess]=useState(false);
  const [serverError,setServerError]=useState(null);
  const onSubmit = async()=>{
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,data);
      setSuccess(true);
      navigate('/Home')
    }catch(err){
      setServerError("Login fail");
    }
  }
  return <Box sx={{backgroundColor:'#FCF8FF', fontFamily:'Inter'}}>
    <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
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
          <Box variant='form'component={'form'} onSubmit={handleSubmit(onSubmit)}>
            {serverError?
            <Alert severity="error" sx={{marginBottom:2}}>{serverError}</Alert>
            :null
            }
            <Box sx={{display:'flex',gap:2,alignItems:'center',width:'100%',marginBottom:2,flexWrap:{xs:'wrap',sm:'nowrap'}}}>
              <Box sx={{width:'100%'}}>
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>Email Address</Typography>
            <OutlinedInput fullWidth placeholder='eleanor@studio.design' {...register('email')} error={errors.email} sx={{px:1.5,backgroundColor:"#F7F8FC"}} type='email' startAdornment={
             <InputAdornment position="start">
             <EmailOutlinedIcon sx={{ color: '#6E6D7A'}} />
             </InputAdornment>
           }></OutlinedInput>
           {errors.email?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.email?.message}</Typography>
           :null
          }
              </Box>
            </Box>
            <Box sx={{marginBottom:2}}>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>Password</Typography>
            <Typography variant='p'sx={{color:'#6E6D7A',fontSize:11,fontWeight:500,letterSpacing:0.33}}>Minimum 8 characters</Typography>
              </Box>
            <OutlinedInput fullWidth type='password' sx={{px:1.5,backgroundColor:"#F7F8FC"}}error={errors.password} placeholder='Enter your password' {...register('password')} startAdornment={
             <InputAdornment position="start">
             <LockOutlinedIcon sx={{ color: '#6E6D7A'}} />
             </InputAdornment>
           }></OutlinedInput>
           {errors.password?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.password?.message}</Typography>
           :null
          }
            </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',textAlign:'center'}}>
            <Box sx={{display:'flex',alignItems:'center',gap:1.25,marginBottom:2}}>
              <Checkbox defaultChecked={false} size="small" color='#767676'/>
              <Typography variant='p'component={"p"} sx={{color:'#464552',fontSize:13,letterSpacing:0.13}}>Remember this device for 30 days</Typography>
            </Box>
            <Link href='ForgetPassword' sx={{textDecoration:'none',color:'#FC6955',fontSize:12,fontWeight:600,letterSpacing:0.24}}>Forget password?</Link>
            </Box>
            <Button type='submit' variant="contained" disabled={isSubmitting} sx={{marginBottom:3,backgroundColor:'#272387',width:'100%',py:1.75,px:3,borderRadius:4,fontSize:16,fontWeight:700,color:'white'}}>
              <Box sx={{display:'flex',alignItems:'center',gap:1}}>
              <Typography component={'h2'} sx={{textTransform:'capitalize'}}>Sign In to LUMORA</Typography>
              <LoginIcon sx={{size:12}}/>
              </Box></Button>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:1}}>
                  <Typography variant='p'component={'p'} sx={{color:'#6E6D7A',fontSize:13,letterSpacing:0.13}}>New to LUMORA?  </Typography>
                  <Link href='Register' sx={{color:'#272387',fontSize:16,fontWeight:600,textDecoration:'none'}}>Create an account</Link>
                  <ArrowForwardOutlinedIcon sx={{width:13,height:20,color:'#272387'}}/>
              </Box>
          </Box>
      </Box>
    </Container>
  </Box>
}

export default Login