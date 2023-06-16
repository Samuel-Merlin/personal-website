import React from "react";
import './App.css'
import { Link } from 'react-router-dom';
import NVME from './img/NVMe.png'
function Doc() {
    return (
    <div className="pgContainer">
        <div className="docContainer">
            <div className="retrun">Go Back: <Link to="/">Return</Link></div>
            <img src={NVME} alt="Myself" className="document"/>
        </div>
    </div>
    )
}
export default Doc