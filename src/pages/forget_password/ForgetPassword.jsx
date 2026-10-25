import { alpha, Box, Container, InputAdornment, OutlinedInput, Typography,Button ,Alert} from '@mui/material'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import OtpInput from 'react-otp-input';


function ForgetPassword() {
  const RegisterSchema = yup.object({
      email:yup.string().required('Email is required').email("Invalid email format"),
      newPassword:yup.string().required('Password is required')
      .matches(/[A-Z]/,"Password must be contain a capital letter")
      .matches(/[a-z]/,"Password must be contain a small letter")
      .matches(/[0-9]/,"Password must be contain a number")
      .min(8,"password must be at least 8 char"),
      code:yup.string(),
    })
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
      resolver:yupResolver(RegisterSchema),mode:'onBlur'
    })
    const navigate = useNavigate();
    const [success,setSuccess]=useState(false);
    const [serverError,setServerError]=useState(null);
    const onSubmit = async(data)=>{
      try{
        const response = await axios.patch(`https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword`,data);
        console.log(data)
        setSuccess(true);
        navigate('/login')
      }catch(err){
        setServerError("fail");
      }
    }
      const [otp, setOtp] = useState('');

return <Box sx={{fontFamily:'Inter'}}>
    <Container sx={{display:'flex',justifyContent:'center'}}>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{backgroundColor:alpha('#FFFFFF',0.2),p:5,boxShadow:3,borderRadius:1.5,width:'fit-content',display:'flex',flexDirection:'column',gap:3}}>
        <Box>
          <Typography component={"h2"} sx={{fontSize:28,fontWeight:600,letterSpacing:-0.7,marginBottom:1}}>Reset Your Password</Typography>
          <Typography component={"p"} sx={{color:'#6E6D7A',fontSize:15,letterSpacing:-0.7,marginBottom:1}}>Don't worry! Enter your verified email address and we'll send a 6-digit <br/> confirmation code right away.</Typography>
        </Box>
          {serverError?
                      <Alert severity="error" >{serverError}</Alert>
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
            <Typography variant='h2' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600,lineHeight:2,letterSpacing:0.24,marginBottom:0.75}}>New Password</Typography>
            <Typography variant='p'sx={{color:'#6E6D7A',fontSize:11,fontWeight:500,letterSpacing:0.33}}>Minimum 8 characters</Typography>
              </Box>
            <OutlinedInput fullWidth type='password' sx={{px:1.5,backgroundColor:"#F7F8FC"}}error={errors.password} placeholder='Enter your password' {...register('newPassword')} startAdornment={
             <InputAdornment position="start">
             <LockOutlinedIcon sx={{ color: '#6E6D7A'}} />
             </InputAdornment>
           }></OutlinedInput>
           {errors.password?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.password?.message}</Typography>
           :null
          }
            </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <OtpInput
            {...register('code')}
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
    width: '60px',
    height: '60px',
    fontSize: '24px',
    borderRadius: '10px',
    border: '1px solid #D1D5DB',
    outline: 'none',
    textAlign: 'center',
  }}
    />
    {errors.code?
           <Typography variant='p' component={'p'} sx={{color:'red' ,fontSize:14,marginTop:1}}>{errors.code?.message}</Typography>
           :null
          }
            </Box>
        <Button type='submit' variant="contained" disabled={isSubmitting}  sx={{ marginBottom: 3, backgroundColor: '#272387', width: '100%', py: 1.75, px: 3, borderRadius: 4, fontSize: 16, fontWeight: 700, color: 'white' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography component={'h2'} sx={{ textTransform: 'capitalize', fontSize: 14, fontWeight: 600 }}>Reset password</Typography>
            <SendIcon sx={{ width: 15, height: 13 }} />
          </Box></Button>
      </Box>
    </Container>
  </Box>}

export default ForgetPassword