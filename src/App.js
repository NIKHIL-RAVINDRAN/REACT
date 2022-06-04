 import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#11143e';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (

    <>
      <Router>

    <Navbar title="TEXTOOLS" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-5'>
      <Routes>
        <Route path="/about" element={<div className='myContainer my-5 mx-6'><About mode={mode}/></div>}/>
          
          <Route path="/" element={<div className='myContainer2 my-5 mx-3'><Text heading="ENTER THE TEXT TO ANALYZE" mode={mode}/></div>} />
    
        </Routes>
      </div>
      </Router>
    
    
      
    </>
);
}


export default App;
