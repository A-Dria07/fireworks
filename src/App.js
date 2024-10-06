// src/App.js

import React, { useState } from 'react';
import ParticleCanvas from './ParticleCanvas';
import ColorPicker from './ColorPicker';
import './App.css'; // Make sure to have some basic styles

const App = () => {
  const [selectedColors, setSelectedColors] = useState(['#2185C5']); // Start with one default color
  const [power, setPower] = useState(12); // Default power value
  const [metal, setMetal] = useState(12); // Defaultmetal value
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Control menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <ParticleCanvas  colors={selectedColors} power={power} metal = {metal} setCount={setCount} /> {/* Pass power value */}
      </div>
      <div style={{ padding: '20px', position: 'fixed', right: '10px', top: '10px' }}>
      {/* Hamburger Icon */}
      <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 10 }}>
        <button 
          onClick={toggleMenu} 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '30px',
            color: 'white',
          }}
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Side Menu (Color Picker) */}
      <div
        style={{
          position: 'fixed',
          right: menuOpen ? '0' : '-400px', // Slide in/out
          top: '0',
          height: '100%',
          width: '300px',
          backgroundColor: '#222',
          transition: 'right 0.3s ease',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
          zIndex: 9,
        }}
      >
      

        {/* Color Picker Component */}
        <ColorPicker 
          selectedColors={selectedColors} 
          setSelectedColors={setSelectedColors}
          power={power} 
          setPower={setPower} // Pass setPower to ColorPicker
          metal={metal} 
          setMetal={setMetal} // Pass setPower to ColorPicker
        />

      </div>

    <div style={{
        position: 'fixed',
        top: '10px',
        left: '20px', // Adjust the position as needed
        color: 'white',
        fontSize: '100%',
      }}>
        CO2 emissions: {count.toFixed(5)} Kg
      </div>
      </div>
    </div>
  );
};

export default App;