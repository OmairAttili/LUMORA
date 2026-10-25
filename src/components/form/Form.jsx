import React, { useState } from 'react'
import { alpha, Box, Container, Typography,Button, Divider,InputAdornment, Checkbox,OutlinedInput ,Link, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { FormState, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import registerSchema from '../../schemas/Schema';
function Form() {
     const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    resolver:yupResolver(registerSchema),mode:'onBlur'
  })
  const navigate = useNavigate();
  const [success,setSuccess]=useState(false);
  const [serverError,setServerError]=useState(null);
  const onSubmit = async(data)=>{
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,data);
      setSuccess(true);
      navigate('/Login')
    }catch(err){
      setServerError("Registration fail");
    }
  }
  return <Box variant='Form'component={'form'} onSubmit={handleSubmit(onSubmit)}>
            {serverError?
            <Alert severity="error" sx={{marginBottom:2}}>{serverError}</Alert>
            :null
            }
            <Box sx={{marginBottom:2}}>
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>User Name</Typography>
            <OutlinedInput fullWidth placeholder='Omair' {...register('userName')} error={errors.userName} sx={{px:1.5,backgroundColor:"#F7F8FC",position:'relative'}} startAdornment={
             <InputAdornment position="start">
             <PersonIcon sx={{ color: '#6E6D7A'}} />
             </InputAdornment>
           }></OutlinedInput>
           {errors.userName?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.userName?.message}</Typography>
           :null
          }
            </Box>
            <Box sx={{marginBottom:2}}>
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>Full Name</Typography>
            <OutlinedInput fullWidth placeholder='Omair Attili' {...register('fullName')} error={errors.fullName} sx={{px:1.5,backgroundColor:"#F7F8FC",position:'relative'}} startAdornment={
             <InputAdornment position="start">
             <PersonIcon sx={{ color: '#6E6D7A'}} />
             </InputAdornment>
           }></OutlinedInput>
           {errors.fullName?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.fullName?.message}</Typography>
           :null
          }
            </Box>
            <Box sx={{display:'flex',gap:2,alignItems:'center',width:'100%',marginBottom:2,flexWrap:{xs:'wrap',sm:'nowrap'}}}>
              <Box sx={{width:{xs:'100%',sm:'50%'}}}>
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
              <Box sx={{width:{xs:'100%',sm:'50%'}}}>
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>Phone Number</Typography>
            <OutlinedInput fullWidth placeholder='(555) 019-2834' {...register('phoneNumber')} error={errors.phoneNumber} sx={{px:1.5,backgroundColor:"#F7F8FC"}}startAdornment={
             <InputAdornment position="start">
             <LocalPhoneOutlinedIcon sx={{ color: '#6E6D7A'}} />
             </InputAdornment>
           }></OutlinedInput>
           {errors.phoneNumber?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.phoneNumber?.message}</Typography>
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
            <Box sx={{display:'flex',alignItems:'center',gap:1.5,marginBottom:2}}>
              <Checkbox defaultChecked={false} size="small" color='#767676'/>
              <Typography variant='p'component={"p"} sx={{color:'#6E6D7A',fontSize:13,letterSpacing:0.13}}>I agree to LUMORA's <Link href='#' sx={{color:'#272387',fontWeight:500,textDecoration:'none'}}>Terms of Service</Link> and <Link href={'#'} sx={{color:'#272387',fontWeight:500,textDecoration:'none'}}>Privacy Policy </Link>, including device telemetry optimization.</Typography>
            </Box>
            <Button type='submit' variant="contained" disabled={isSubmitting} sx={{marginBottom:3,backgroundColor:'#272387',width:'100%',py:1.75,px:3,borderRadius:4,fontSize:16,fontWeight:700,color:'white'}}>
              <Box sx={{display:'flex',alignItems:'center',gap:1}}>
              <Typography component={'h2'} sx={{textTransform:'capitalize'}}>Create Account</Typography>
              <ArrowForwardIcon sx={{size:12}}/>
              </Box></Button>
              <Box sx={{pt:2.5,borderTop:0.1,borderColor:'#6E6D7A',display:'flex',flexDirection:{xs:'column',sm:'row'},alignItems:'center',justifyContent:'space-between',gap:{xs:2,sm:0}}}>
                <Box sx={{display:'flex',alignItems:'center',gap:1}}>
                  <Typography variant='p'component={'p'} sx={{color:'#6E6D7A',fontSize:13,letterSpacing:0.13}}>Already have an account? </Typography>
                  <Link href='login' sx={{color:'#272387',fontSize:16,fontWeight:600,textDecoration:'none'}}>Log in</Link>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',gap:1.5,justifyContent:{xs:'center',sm:'start'}}}>
                  <Box sx={{display:'flex',alignItems:'center',gap:0.5}}>
                    <VerifiedOutlinedIcon sx={{color:'#2E7D32',width:14,height:14}}/>
                    <Typography component={"span"} variant='span' sx={{color:'#6E6D7A',fontSize:11,fontWeight:500,letterSpacing:0.33}}>SSL Secured</Typography>
                  </Box>
                  <Box sx={{display:'flex',alignItems:'center',gap:0.5}}>
                    <ShieldOutlinedIcon sx={{color:'#272387',width:14,height:14}}/>
                    <Typography component={"span"} variant='span' sx={{color:'#6E6D7A',fontSize:11,fontWeight:500,letterSpacing:0.33}}>Privacy 100% Guaranteed</Typography>
                  </Box>
                </Box>
              </Box>
          </Box>
}

export default Form