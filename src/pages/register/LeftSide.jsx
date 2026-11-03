import React from 'react'
import { alpha, Box, Typography } from '@mui/material';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import RegisterDecore from '../../assets/images/RegisterDecore.png';
import StarIcon from '@mui/icons-material/Star';
import { motion } from "motion/react"

function LeftSide() {
    return <Box component={motion.div} sx={{ display: { lg: 'block', xs: 'none' }, background: 'linear-gradient(to bottom right,rgba(252, 105, 85, 1),rgba(63, 61, 158, 1),rgba(39, 35, 135, 1),rgba(94, 91, 168, 1),rgba(84, 82, 180, 1))', p: 5, borderRadius: 2, marginTop: 3, boxShadow: 3 }}
        initial={{ opacity: 0, x: -700 }} animate={{ opacity: 100, x: 0 }} transition={{ duration: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <Box sx={{ backgroundColor: alpha('#FFFFFF', 0.1), width: 'fit-content', p: 1, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AutoAwesomeOutlinedIcon sx={{ color: 'white' }} />
                </Box>
                <Typography component='h2' sx={{ color: 'white', fontWeight: 700, fontSize: 22, fontFamily: 'Inter' }}>LUMORA</Typography>
            </Box>
            <Box sx={{ backgroundColor: alpha('#FFFFFF', 0.1), py: 0.5, px: 1.5, borderRadius: 50, width: 'fit-content' }}>
                <Typography component='h2' sx={{ color: 'white', fontSize: 11, fontWeight: 500, fontFamily: 'Inter' }}>MEMBER ACCESS</Typography>
            </Box>
        </Box>
        <Box sx={{ marginBottom: 4, marginBottom: 4 }}>
            <Typography component='h2' variant='h2' sx={{ color: 'white', fontSize: 40, fontWeight: 700, fontFamily: 'Outfit', margin: 1.5, lineHeight: 1.5, letterSpacing: 0.6, marginLeft: 0 }}>Curated living,<br />amplified by<br /> precision.</Typography>
            <Typography component='p' variant='p' sx={{ color: alpha('#FFFFFF', 0.8), fontSize: 15, fontFamily: 'Inter', lineHeight: 1.5 }}>Enter the ecosystem connecting high-end industrial<br />tech, intelligent lifestyle appliances, and bespoke<br />sound stages.</Typography>
        </Box>
        <Box sx={{ marginBottom: 8.5 }} component={motion.div} initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 2.5, delay: 2 }}>
            <Box component={motion.div} sx={{ backgroundColor: alpha('#FFFFFF', 0.1), borderRadius: 1.5, p: 1.5, display: 'flex', alignItems: 'center', gap: 1.7 }}
                whileHover={{ backgroundColor: alpha('#FFFFFF', 0.3) }} transition={{ duration: 0.5 }}>
                <Box sx={{ backgroundColor: alpha('#FFFFFF', 0.2), borderRadius: 1, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StarsIcon sx={{ color: 'white', fontSize: 15 }} />
                </Box>
                <Box>
                    <Typography component="p" sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: 'white', lineHeight: 1.5 }}>Exclusive Member Perks</Typography>
                    <Typography component="p" sx={{ fontFamily: 'Inter', fontSize: 13, color: alpha("#FFFFFF", 0.75), letterSpacing: 0.13, lineHeight: 1.5 }}>Tiered loyalty rebates, concierge setup, and<br />private concierge line</Typography>
                </Box>
            </Box>
            <Box component={motion.div} sx={{ backgroundColor: alpha('#FFFFFF', 0.1), borderRadius: 1.5, p: 1.5, display: 'flex', alignItems: 'center', gap: 1.7, marginTop: 1.5, marginBottom: 1.5 }}
                whileHover={{ backgroundColor: alpha('#FFFFFF', 0.3) }} transition={{ duration: 0.5 }}>
                <Box sx={{ backgroundColor: alpha('#FFFFFF', 0.2), borderRadius: 1, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AccessTimeIcon sx={{ color: 'white', fontSize: 15 }} />
                </Box>
                <Box>
                    <Typography component="p" sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: 'white', lineHeight: 1.5 }}>Early Access to Drops</Typography>
                    <Typography component="p" sx={{ fontFamily: 'Inter', fontSize: 13, color: alpha("#FFFFFF", 0.75), letterSpacing: 0.13, lineHeight: 1.5 }}>24-hour reserved head start on limited edition<br />product runs</Typography>
                </Box>
            </Box>
            <Box component={motion.div} sx={{ backgroundColor: alpha('#FFFFFF', 0.1), borderRadius: 1.5, p: 1.5, display: 'flex', alignItems: 'center', gap: 1.7 }}
                whileHover={{ backgroundColor: alpha('#FFFFFF', 0.3) }} transition={{ duration: 0.5 }}>
                <Box sx={{ backgroundColor: alpha('#FFFFFF', 0.2), borderRadius: 1, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BoltOutlinedIcon sx={{ color: 'white', fontSize: 15 }} />
                </Box>
                <Box>
                    <Typography component="p" sx={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: 'white', lineHeight: 1.5 }}>Express 1-Click Checkout</Typography>
                    <Typography component="p" sx={{ fontFamily: 'Inter', fontSize: 13, color: alpha("#FFFFFF", 0.75), letterSpacing: 0.13, lineHeight: 1.5 }}>Tokenized biometrics & carbon-neutral zero-delay <br />dispatch</Typography>
                </Box>
            </Box>
        </Box>
        <Box component={motion.div} sx={{ backgroundColor: alpha("#FFFFFF", 0.1), p: 2, borderRadius: 1.5, display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}
            whileHover={{ backgroundColor: alpha('#FFFFFF', 0.3) }} transition={{ duration: 0.5 }}>
            <img src={RegisterDecore} alt='Decore' />
            <Box>
                <Box sx={{ color: '#FC6955', display: 'flex', alignItems: 'center', gap: 0.5, marginBottom: 0.5 }}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <Typography component="span" sx={{ color: 'white', fontSize: 12, fontWeight: 700, letterSpacing: 0.24, lineHeight: 1.5, fontFamily: 'Inter' }}>4.96/5.0</Typography>
                </Box>
                <Typography component='p' sx={{ color: alpha("#FFFFFF", 0.9), fontSize: 13, fontFamily: 'Inter', letterSpacing: 0.13, lineHeight: 1.8 }}>“The fastest, most seamless tech procurement experience online.”</Typography>
                <Typography component='p' sx={{ color: alpha("#FFFFFF", 0.7), fontWeight: 500, fontSize: 11, fontFamily: 'Inter', letterSpacing: 0.33, lineHeight: 1.4 }}>Julian Vane • Design Director, Zurich</Typography>
            </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography component="p" sx={{ color: alpha("#FFFFFF", 0.75), letterSpacing: 0.33, lineHeight: 1.4, fontWeight: 500, fontSize: 11, fontFamily: 'Inter' }}>© 2025 LUMORA Inc.</Typography>
            <Typography component="p" sx={{ color: alpha("#FFFFFF", 0.75), letterSpacing: 0.33, lineHeight: 1.4, fontWeight: 500, fontSize: 11, fontFamily: 'Inter' }}>Refined Living System</Typography>
        </Box>
    </Box>
}

export default LeftSide