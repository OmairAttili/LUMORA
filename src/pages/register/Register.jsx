import React, { useState } from 'react'
import { alpha, Box, Container, Typography,Button, Divider,InputAdornment, Checkbox,OutlinedInput ,Link, Alert } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DevicesIcon from '@mui/icons-material/Devices';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import RegisterDecore from '../../assets/images/RegisterDecore.png';
import StarIcon from '@mui/icons-material/Star';
import Google from '../../assets/images/Google.png'
import Apple from '../../assets/images/Apple.svg'
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { FormState, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


function Register() {
  const registerSchema = yup.object({
    fullName:yup.string().required('Full Name is required').min(3,"Full Name must be at least 3 char"),
    userName:yup.string().required('User Name is required').min(3,"User Name must be at least 3 char"),
    email:yup.string().required('Email is required').email("Invalid email format"),
    password:yup.string().required('Password is required')
    .matches(/[A-Z]/,"Password must be contain a capital letter")
    .matches(/[a-z]/,"Password must be contain a small letter")
    .matches(/[0-9]/,"Password must be contain a number")
    .min(8,"password must be at least 8 char"),
    phoneNumber:yup.string().required('Phone Number is required').matches(/^05\d{8}$/,"phone number must be have a numbers"),
  })
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    resolver:yupResolver(registerSchema),mode:'onBlur'
  })
  const navigate = useNavigate();
  const [success,setSuccess]=useState(false);
  const [serverError,setServerError]=useState(null);
  const onSubmit = async()=>{
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,data);
      setSuccess(true);
      navigate('/Login')
    }catch(err){
      setServerError("Registration fail");
    }
  }
  return <Box sx={{backgroundColor:'#FCF8FF', fontFamily:'Inter'}}>
    <Container>
      <Box sx={{backgroundColor:'#F5F2FF',borderRadius:3,px:2,py:1.25,display:'flex',flexDirection:{xs:'column',md:'row'},alignItems:'center',justifyContent:'space-between',gap:{xs:1.5,md:1}}}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:{xs:'space-between',md:'start'},gap:1}}>
          <Box sx={{display:'flex',alignItems:'center',gap:1}}>
        <CircleIcon sx={{fontSize:10,color:'#2E7D32'}}/>
        <Typography component={'h2'} variant='h6' sx={{fontFamily:'Inter',fontSize:12,fontWeight:600}}>REGISTRATION PORTAL</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',gap:1}}>
        <CircleIcon sx={{fontSize:5,color:'#C7C5D4'}}/>
        <Typography component={'h2'} variant='h6' sx={{fontFamily:'Inter',fontSize:12,color:'#6E6D7A'}}>v2.4 Secured Gateway</Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',gap:1}}>
        <Box sx={{backgroundColor:'white',borderRadius:100,display:'flex',alignItems:'center',gap:0.75,px:1.25,py:0.5}}>
          <DevicesIcon sx={{color:'#272387',fontSize:12,opacity:'100%'}}/>
          <Typography component='h2'variant='h6'sx={{fontSize:11,color:'#6E6D7A',fontFamily:'Inter'}}>Adaptive: 1440px / 768px / 390px</Typography>
        </Box>
        <Box sx={{backgroundColor:'white',borderRadius:100,display:{xs:'none',sm:'flex'},alignItems:'center',gap:0.75,px:1.25,py:0.5, color:'#2E7D32'}}>
          <LockOutlinedIcon sx={{fontSize:12,opacity:'100%'}}/>
          <Typography component='h2'variant='h6'sx={{fontSize:11,fontFamily:'Inter'}}>256-Bit SSL Active</Typography>
        </Box>
        </Box>
      </Box>
      <Box sx={{display:'flex',gap:4}}>
      <Box sx={{display:{lg:'block',xs:'none'},background:'linear-gradient(to bottom right,rgba(252, 105, 85, 1),rgba(63, 61, 158, 1),rgba(39, 35, 135, 1),rgba(94, 91, 168, 1),rgba(84, 82, 180, 1))',p:5,borderRadius:2,marginTop:3,boxShadow:3}}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:4}}>
        <Box sx={{display:'flex',alignItems:'center',gap:1.25}}>
          <Box sx={{backgroundColor:alpha('#FFFFFF',0.1),width:'fit-content',p:1,borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <AutoAwesomeOutlinedIcon sx={{color:'white'}}/>
          </Box>
          <Typography component='h2' sx={{color:'white',fontWeight:700,fontSize:22,fontFamily:'Inter'}}>LUMORA</Typography>
        </Box>
        <Box sx={{backgroundColor:alpha('#FFFFFF',0.1),py:0.5,px:1.5,borderRadius:50,width:'fit-content'}}>
          <Typography component='h2' sx={{color:'white',fontSize:11,fontWeight:500,fontFamily:'Inter'}}>MEMBER ACCESS</Typography>
        </Box>
        </Box>
        <Box sx={{marginBottom:4,marginBottom:4}}>
          <Typography component='h2' variant='h2' sx={{color:'white',fontSize:40,fontWeight:700,fontFamily:'Outfit',margin:1.5,lineHeight:1.5,letterSpacing:0.6,marginLeft:0}}>Curated living,<br/>amplified by<br/> precision.</Typography>
          <Typography component='p' variant='p' sx={{color:alpha('#FFFFFF',0.8),fontSize:15,fontFamily:'Inter',lineHeight:1.5}}>Enter the ecosystem connecting high-end industrial<br/>tech, intelligent lifestyle appliances, and bespoke<br/>sound stages.</Typography>
        </Box>
        <Box sx={{marginBottom:8.5}}>
          <Box sx={{backgroundColor:alpha('#FFFFFF',0.1),borderRadius:1.5,p:1.5,display:'flex',alignItems:'center',gap:1.7}}>
            <Box sx={{backgroundColor:alpha('#FFFFFF',0.2),borderRadius:1,width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <StarsIcon sx={{color:'white',fontSize:15}}/>
            </Box>
            <Box>
              <Typography component="p" sx={{fontFamily:'Inter',fontSize:16,fontWeight:600,color:'white',lineHeight:1.5}}>Exclusive Member Perks</Typography>
              <Typography component="p" sx={{fontFamily:'Inter',fontSize:13,color:alpha("#FFFFFF",0.75),letterSpacing:0.13,lineHeight:1.5}}>Tiered loyalty rebates, concierge setup, and<br/>private concierge line</Typography>
            </Box>
          </Box>
          <Box sx={{backgroundColor:alpha('#FFFFFF',0.1),borderRadius:1.5,p:1.5,display:'flex',alignItems:'center',gap:1.7,marginTop:1.5,marginBottom:1.5}}>
            <Box sx={{backgroundColor:alpha('#FFFFFF',0.2),borderRadius:1,width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <AccessTimeIcon sx={{color:'white',fontSize:15}}/>
            </Box>
            <Box>
              <Typography component="p" sx={{fontFamily:'Inter',fontSize:16,fontWeight:600,color:'white',lineHeight:1.5}}>Early Access to Drops</Typography>
              <Typography component="p" sx={{fontFamily:'Inter',fontSize:13,color:alpha("#FFFFFF",0.75),letterSpacing:0.13,lineHeight:1.5}}>24-hour reserved head start on limited edition<br/>product runs</Typography>
            </Box>
          </Box>
          <Box sx={{backgroundColor:alpha('#FFFFFF',0.1),borderRadius:1.5,p:1.5,display:'flex',alignItems:'center',gap:1.7}}>
            <Box sx={{backgroundColor:alpha('#FFFFFF',0.2),borderRadius:1,width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <BoltOutlinedIcon sx={{color:'white',fontSize:15}}/>
            </Box>
            <Box>
              <Typography component="p" sx={{fontFamily:'Inter',fontSize:16,fontWeight:600,color:'white',lineHeight:1.5}}>Express 1-Click Checkout</Typography>
              <Typography component="p" sx={{fontFamily:'Inter',fontSize:13,color:alpha("#FFFFFF",0.75),letterSpacing:0.13,lineHeight:1.5}}>Tokenized biometrics & carbon-neutral zero-delay <br/>dispatch</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{backgroundColor:alpha("#FFFFFF",0.1),p:2,borderRadius:1.5,display:'flex',alignItems:'center',gap:2,marginBottom:2}}>
          <img src={RegisterDecore} alt='Decore'/>
          <Box>
            <Box sx={{color:'#FC6955',display:'flex',alignItems:'center',gap:0.5,marginBottom:0.5}}>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <Typography component="span"sx={{color:'white',fontSize:12,fontWeight:700,letterSpacing:0.24,lineHeight:1.5,fontFamily:'Inter'}}>4.96/5.0</Typography>
            </Box>
            <Typography component='p' sx={{color:alpha("#FFFFFF",0.9),fontSize:13,fontFamily:'Inter',letterSpacing:0.13,lineHeight:1.8}}>“The fastest, most seamless tech procurement experience online.”</Typography>
            <Typography component='p' sx={{color:alpha("#FFFFFF",0.7),fontWeight:500,fontSize:11,fontFamily:'Inter',letterSpacing:0.33,lineHeight:1.4}}>Julian Vane • Design Director, Zurich</Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Typography component="p" sx={{color:alpha("#FFFFFF",0.75),letterSpacing:0.33,lineHeight:1.4,fontWeight:500,fontSize:11,fontFamily:'Inter'}}>© 2025 LUMORA Inc.</Typography>
          <Typography component="p" sx={{color:alpha("#FFFFFF",0.75),letterSpacing:0.33,lineHeight:1.4,fontWeight:500,fontSize:11,fontFamily:'Inter'}}>Refined Living System</Typography>
        </Box>
      </Box>
        <Box sx={{width:{lg:'60%',xs:'100%'},marginTop:3}}>
        <Box sx={{backgroundColor:alpha('#FFFFFF',0.2),boxShadow:3,py:5,px:{xs:2,sm:5},borderRadius:2}}>
          <Box sx={{marginBottom:3}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <Typography component="h2" sx={{color:'#272387',fontFamily:'Outfit',fontWeight:700,fontSize:22,letterSpacing:0.55,lineHeight:2}}>LUMORA</Typography>
              <Typography component="span" sx={{color:'#6E6D7A',fontFamily:'Inter',fontWeight:500,fontSize:11,letterSpacing:0.33}}>Step 1 of 1</Typography>
            </Box>
            <Typography component="p" sx={{fontSize:28,fontWeight:700,fontFamily:'Outfit',letterSpacing:0.7}}>Create your LUMORA Account</Typography>
            <Typography component="p" sx={{fontSize:15,fontFamily:'Inter',letterSpacing:0.7,color:"#6E6D7A"}}>Join over 250,000+ smart shoppers worldwide.</Typography>
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
            <Typography sx={{fontFamily:'Inter',fontSize:11,fontWeight:500,letterSpacing:1.1,color:'#6E6D7A',marginX:2}}>OR REGISTER WITH EMAIL</Typography>
            <Divider sx={{borderColor:'#E8E6FE',height:1,flex:1}}/>
          </Box>
          <Box variant='Form'component={'form'} onSubmit={handleSubmit(onSubmit)}>
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
        </Box>
        <Box sx={{pt:2,display:'flex',flexDirection:{xs:'column',sm:'row'},alignItems:'center',justifyContent:{xs:'center',sm:'space-between'},gap:{xs:3,sm:0}}}>
          <Box sx={{color:'#6E6D7A', display:'flex',alignItems:'center',gap:0.75}}>
            <LocalShippingOutlinedIcon sx={{width:12,height:12}}/>
            <Typography variant='p' component={'p'} sx={{fontWeight:500,fontSize:11,letterSpacing:0.33}}>Carbon-Neutral Global Shipping</Typography>
          </Box>
          <Box sx={{color:'#6E6D7A', display:'flex',alignItems:'center',gap:0.75}}>
            <AutorenewIcon sx={{width:12,height:12}}/>
            <Typography variant='p' component={'p'} sx={{fontWeight:500,fontSize:11,letterSpacing:0.33}}>30-Day In-Home Guarantee</Typography>
          </Box>
          <Box sx={{color:'#6E6D7A', display:'flex',alignItems:'center',gap:0.75}}>
            <SupportAgentIcon sx={{width:12,height:12}}/>
            <Typography variant='p' component={'p'} sx={{fontWeight:500,fontSize:11,letterSpacing:0.33}}>24/7 Priority Support</Typography>
          </Box>
        </Box>
        </Box>
      </Box>
    </Container>
  </Box>
}

export default Register