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

const handleSubmit = () => {
  console.log("its running");
  let databody = {
    id: playerTag,
    x: xCoord,
    y: yCoord
  };
  return fetch("http://localhost:8000/", {
    method: "POST",
    body: databody,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};


const handleKeyDown = async (event) => {
    if (event.key == 'ArrowDown'){
      setyCoord(yCoord - sensitivity);
      await handleSubmit();
    }
    else if (event.key == 'ArrowUp'){
      setyCoord(yCoord + sensitivity);
      await handleSubmit();
    }
    else if (event.key == 'ArrowLeft'){
      setxCoord(xCoord + sensitivity);
      await handleSubmit();
    }
    else if (event.key == 'ArrowRight'){
      setxCoord(xCoord - sensitivity);
      await handleSubmit();
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
