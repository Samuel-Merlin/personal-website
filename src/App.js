import React, {useState} from 'react';
import { Routes, Route, useNavigate  } from "react-router-dom";
import HomePage from './HomePage';
import Doc from './Doc';

function App() {
    return (
        <Routes>
          <Route path="/"  element={ <HomePage/> } />
          <Route path = "How To" element={<Doc/>} />
        </Routes>
    )
  }
export default App

