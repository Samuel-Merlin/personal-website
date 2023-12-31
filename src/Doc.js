import React from "react";
import './App.css'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import NVME from './img/NVMe.png'
function Doc() {
    return (
    <div className="pgContainer">
        <div className="docContainer">
        <Box
             sx={{
                m:1,
                maxWidth:3000,
                lineHeight:1.4,
                fontWeight:'bold',
                fontSize: 32,
                height: 48,
                color:'darkcyan',
                background:' black',
                opacity: [0.9, 0.8, 0.7],}}
                >
                <Link to="/">Return</Link>
            </Box>
            <img src={NVME} alt="Myself" className="document"/>
        </div>
    </div>
    )
}
export default Doc