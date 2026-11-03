import React from 'react'
import Google from '../../assets/images/Google.png'
import Apple from '../../assets/images/Apple.svg'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Form from '../../components/form/Form'
import { alpha, Box, Typography, Button, Divider } from '@mui/material';
import { motion } from "motion/react"

export default function RightSide() {
    return <Box sx={{ width: { lg: '60%', xs: '100%' }, marginTop: 3 }} component={motion.div}
        initial={{ y: 300, rotateZ: 5 }} animate={{ y: 0, rotateZ: 0 }} transition={{ duration: 3 }}>
        <Box sx={{ backgroundColor: alpha('#FFFFFF', 0.2), boxShadow: 3, py: 5, px: { xs: 2, sm: 5 }, borderRadius: 2 }}>
            <Box sx={{ marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography component="h2" sx={{ color: '#272387', fontFamily: 'Outfit', fontWeight: 700, fontSize: 22, letterSpacing: 0.55, lineHeight: 2 }}>LUMORA</Typography>
                    <Typography component="span" sx={{ color: '#6E6D7A', fontFamily: 'Inter', fontWeight: 500, fontSize: 11, letterSpacing: 0.33 }}>Step 1 of 1</Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: 28, fontWeight: 700, fontFamily: 'Outfit', letterSpacing: 0.7 }}>Create your LUMORA Account</Typography>
                <Typography component="p" sx={{ fontSize: 15, fontFamily: 'Inter', letterSpacing: 0.7, color: "#6E6D7A" }}>Join over 250,000+ smart shoppers worldwide.</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, marginBottom: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button component={motion.button} sx={{ width: { sm: '50%', xs: '100%' }, backgroundColor: '#F7F8FC', py: 1.5, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 3, boxShadow: 1 }}
                    whileHover={{ y: -2, backgroundColor: 'gold' }} transition={{ duration: 0.5, color: 'white' }}>
                    <img src={Google} alt='google' />
                    <Typography sx={{ fontSize: 14, fontFamily: 'Inter', fontWeight: 600, color: '#1A1A2B' }}>Continue with Google</Typography>
                </Button>
                <Button component={motion.button} sx={{ width: { sm: '50%', xs: '100%' }, backgroundColor: '#F7F8FC', py: 1.5, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 3, boxShadow: 1 }}
                    whileHover={{ y: -2, backgroundColor: 'gold' }} transition={{ duration: 0.5, color: 'white' }}>
                    <img src={Apple} alt='Apple' />
                    <Typography sx={{ fontSize: 14, fontFamily: 'Inter', fontWeight: 600, color: '#1A1A2B', }}>Continue with Apple</Typography>
                </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                <Divider sx={{ borderColor: '#E8E6FE', height: 1, flex: 1 }} />
                <Typography sx={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, letterSpacing: 1.1, color: '#6E6D7A', marginX: 2 }}>OR REGISTER WITH EMAIL</Typography>
                <Divider sx={{ borderColor: '#E8E6FE', height: 1, flex: 1 }} />
            </Box>
            <Form />
        </Box>
        <Box sx={{ pt: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: { xs: 'center', sm: 'space-between' }, gap: { xs: 3, sm: 0 } }}>
            <Box sx={{ color: '#6E6D7A', display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <LocalShippingOutlinedIcon sx={{ width: 12, height: 12 }} />
                <Typography variant='p' component={'p'} sx={{ fontWeight: 500, fontSize: 11, letterSpacing: 0.33 }}>Carbon-Neutral Global Shipping</Typography>
            </Box>
            <Box sx={{ color: '#6E6D7A', display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <AutorenewIcon sx={{ width: 12, height: 12 }} />
                <Typography variant='p' component={'p'} sx={{ fontWeight: 500, fontSize: 11, letterSpacing: 0.33 }}>30-Day In-Home Guarantee</Typography>
            </Box>
            <Box sx={{ color: '#6E6D7A', display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <SupportAgentIcon sx={{ width: 12, height: 12 }} />
                <Typography variant='p' component={'p'} sx={{ fontWeight: 500, fontSize: 11, letterSpacing: 0.33 }}>24/7 Priority Support</Typography>
            </Box>
        </Box>
    </Box>
}
