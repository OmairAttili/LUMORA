import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DevicesIcon from '@mui/icons-material/Devices';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { motion } from "motion/react"
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Register() {

  return <Box sx={{ backgroundColor: '#FCF8FF', fontFamily: 'Inter' }}>
    <Container>
      <Box component={motion.div} sx={{ backgroundColor: '#F5F2FF', borderRadius: 3, px: 2, py: 1.25, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: { xs: 1.5, md: 1 } }}
        initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-between', md: 'start' }, gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircleIcon sx={{ fontSize: 10, color: '#2E7D32' }} />
            <Typography component={'h2'} variant='h6' sx={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600 }}>REGISTRATION PORTAL</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircleIcon sx={{ fontSize: 5, color: '#C7C5D4' }} />
            <Typography component={'h2'} variant='h6' sx={{ fontFamily: 'Inter', fontSize: 12, color: '#6E6D7A' }}>v2.4 Secured Gateway</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ backgroundColor: 'white', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 0.75, px: 1.25, py: 0.5 }}>
            <DevicesIcon sx={{ color: '#272387', fontSize: 12, opacity: '100%' }} />
            <Typography component='h2' variant='h6' sx={{ fontSize: 11, color: '#6E6D7A', fontFamily: 'Inter' }}>Adaptive: 1440px / 768px / 390px</Typography>
          </Box>
          <Box sx={{ backgroundColor: 'white', borderRadius: 100, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 0.75, px: 1.25, py: 0.5, color: '#2E7D32' }}>
            <LockOutlinedIcon sx={{ fontSize: 12, opacity: '100%' }} />
            <Typography component='h2' variant='h6' sx={{ fontSize: 11, fontFamily: 'Inter' }}>256-Bit SSL Active</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <LeftSide />
        <RightSide />
      </Box>
    </Container>
  </Box>
}
export default Register