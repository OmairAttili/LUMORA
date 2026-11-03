import React, { useState } from 'react'
import { FormState, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from '../../schemas/Schema';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography,Button,InputAdornment, Checkbox,OutlinedInput ,Link, Alert } from '@mui/material';
import { motion } from 'motion/react';

export default function LoginForm() {
     const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
        resolver:yupResolver(LoginSchema),mode:'onBlur'
      })
      const navigate = useNavigate();
      const [success,setSuccess]=useState(false);
      const [serverError,setServerError]=useState(null);
      const onSubmit = async(data)=>{
        try{
          const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,data);
          setSuccess(true);
          navigate('/')
        }catch(err){
          setServerError("Login fail");
        }
      }
  return <Box variant='form'component={'form'} onSubmit={handleSubmit(onSubmit)}>
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
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>Password</Typography>
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
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:2.5}}>
            <Box sx={{display:'flex',alignItems:'center',gap:1.25}}>
              <Checkbox defaultChecked={false} size="small" color='#767676'/>
              <Typography variant='p'component={"p"} sx={{color:'#464552',fontSize:13,letterSpacing:0.13}}>Remember this device for 30 days</Typography>
            </Box>
            <Link component={motion.a} href='SendCode' sx={{textDecoration:'none',color:'#FC6955',fontSize:12,fontWeight:600,letterSpacing:0.24}}
            whileHover={{rotate:10}}>Forget password?</Link>
            </Box>
            <Button component={motion.div} type='submit' variant="contained" disabled={isSubmitting} sx={{marginBottom:3,backgroundColor:'#272387',width:'100%',py:1.75,px:3,borderRadius:4,fontSize:16,fontWeight:700,color:'white'}}
              whileHover={{y:-2,backgroundColor:'#403BA5',boxShadow:'0px 6px 15px rgba(39,35,135,0.25)'}} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Box sx={{display:'flex',alignItems:'center',gap:1}}>
              <Typography component={'h2'} sx={{textTransform:'capitalize'}}>Sign In to LUMORA</Typography>
              <LoginIcon sx={{size:12}}/>
              </Box></Button>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:1}}>
                  <Typography variant='p'component={'p'} sx={{color:'#6E6D7A',fontSize:13,letterSpacing:0.13}}>New to LUMORA?  </Typography>
                  <Link component={motion.a} href='Register' sx={{color:'#272387',fontSize:16,fontWeight:600,textDecoration:'none'}}
                  whileHover={{y:10}} transition={{duration:2}}>Create an account</Link>
                  <ArrowForwardOutlinedIcon sx={{width:13,height:20,color:'#272387'}}/>
              </Box>
          </Box>
}
