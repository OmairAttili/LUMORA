import React from 'react'
import { alpha, Box, Container, Typography } from '@mui/material'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import Login from '../../assets/images/Login.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import comma from '../../assets/images/Comma.svg';

export default function LeftSide() {
  return <Box sx={{width:'100%',fontFamily:'Inter',background:'linear-gradient(to bottom right,rgba(39, 35, 135, 1),rgba(63, 61, 158, 1),rgba(94, 91, 168, 1))',p:5,borderRadius:2,boxShadow:3}}>
    <Container>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Box sx={{display:'flex',alignItems:'center',gap:1.5}}>
                <Box sx={{color:'white',backgroundColor:alpha('#FFFFFF',0.2),p:1.5,border:2,borderColor:alpha("#FFFFFF",0.15),borderRadius:1.5,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <DiamondOutlinedIcon/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Typography component={'h2'}sx={{color:'white',fontFamily:'Outfit',fontSize:22,fontWeight:600}}>LUMORA</Typography>
                    <Typography component={'h2'} sx={{fontSize:11,color:'#C2C1FF',fontWeight:600}}>AESTHETIC <br/> HARDWARE</Typography>
                </Box>
            </Box>
            <Box sx={{backgroundColor:alpha('#FFFFFF',0.2),px:1.5,py:0.75,border:2,borderColor:alpha("#FFFFFF",0.15),borderRadius:15,display:'flex',alignItems:'center',gap:1}}>
                <StarRateIcon sx={{color:'#FCD34D',width:14,height:14}}/>
                <Typography component={'span'} sx={{color:'white',fontSize:12,fontWeight:600,letterSpacing:0.24}}>4.9 / 5.0</Typography>
                <Typography component={'span'} sx={{color:'#C2C1FF',fontSize:11,fontWeight:500,letterSpacing:0.33}}>(12k+ reviews)</Typography>
            </Box>
        </Box>
        <Box sx={{px:6,py:4,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{width:'100%',p:2.5,backgroundColor:alpha('#FFFFFF',0.1),borderRadius:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:2}}>
                <Box sx={{backgroundImage:`url(${Login})`,height:224,width:'100%',borderRadius:1.5,position:'relative'}}>
                    <Box sx={{position:'absolute',top:16,left:22,backgroundColor:'#FC6955',px:1.25,py:0.5,borderRadius:12,color:'white'}}>
                        <Typography sx={{fontWeight:600,fontSize:11,letterSpacing:0.33}}>Spatial Audio Mk.II</Typography>
                    </Box>
                    <Box sx={{position:'absolute',bottom:12,right:12,backgroundColor:'white',px:1.25,py:0.5,borderRadius:1,color:'#1A1A2B'}}>
                        <Typography sx={{fontWeight:600,fontSize:11,letterSpacing:0.33}}>$349</Typography>
                    </Box>
                </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
            <Box>
                <Typography component={'span'} sx={{color:'white',fontSize:16,fontWeight:600}}>LUMORA Horizon One</Typography>
                <Typography component={'p'} sx={{color:'#C2C1FF',fontSize:13,fontWeight:500,letterSpacing:0.13}}>Adaptive Active Noise Cancellation</Typography>
            </Box>
            <Box sx={{color:'white',width:36,height:36,backgroundColor:alpha('#FFFFFF',0.2),borderRadius:12,border:2,borderColor:alpha("#FFFFFF",0.1),display:'flex',alignItems:'center',justifyContent:'center'}}>
                <ArrowForwardIcon sx={{width:20,height:20}}/>
            </Box>
        </Box>
            </Box>
        </Box>
        <Box sx={{backgroundColor:alpha('#FFFFFF',0.1),border:2,borderColor:alpha('#FFFFFF',0.15),borderRadius:1.5,p:2.5,display:'flex',flexDirection:'column',justifyContent:'center',gap:1}}>
            <Box sx={{display:'flex',alignItems:'center',gap:1}}>
                <Typography component={'img'} src={comma}></Typography>
                <Typography component={'span'} sx={{color:'#E2DFFF',fontWeight:600,fontSize:12}}>VERIFIED COLLECTOR</Typography>
            </Box>
            <Typography sx={{color:'white',fontSize:15,fontWeight:500}}>“LUMORA transformed how I discover premium tech. The tactile feel and unmatched clarity redefine everyday listening.”</Typography>
            <Box sx={{borderTop:1,borderColor:alpha('#FFFFFF',0.1),pt:1.25,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography sx={{color:'white',fontSize:11,letterSpacing:0.33}}>Elena Rostova — Industrial Designer</Typography>
                <Typography sx={{color:'#C2C1FF',fontSize:11,letterSpacing:0.33}}>Stockholm, SE</Typography>
            </Box>
        </Box>
    </Container>
  </Box>
}
