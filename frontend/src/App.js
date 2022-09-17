import map from './images/map.jpg';
import './App.css';
import logo from './images/logo.svg';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const sensitivity = 10
  const innerRef = useRef(null);

  const [xCoord, setxCoord] = useState(0);
  const [yCoord, setyCoord] = useState(0);
  const [playerTag, setPlayerTag] = useState("1");

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [xCoord, yCoord]);


const handleKeyDown = (event) => {
    if (event.key == 'ArrowDown'){
      setyCoord(yCoord - sensitivity);
    }
    else if (event.key == 'ArrowUp'){
      setyCoord(yCoord + sensitivity);
    }
    else if (event.key == 'ArrowLeft'){
      setxCoord(xCoord + sensitivity);
    }
    else if (event.key == 'ArrowRight'){
      setxCoord(xCoord - sensitivity);
    }
  };


  return (
    <div className="App" ref = {innerRef}>      
        <img src={map} className="Map" alt="map" />
        <img src={logo} className="PlayerObject" alt="player"/>
    </div>
  );
}

export default App;
