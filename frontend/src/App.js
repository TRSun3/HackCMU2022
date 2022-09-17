import map from './images/map.jpg';
import './App.css';
import logo from './images/logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import PopUp from "./PopUp";




function App() {

  const locations = [ {
    x : 910,
    y : 430,
    src : 'text',
    desc : 'text'
  }, {
    x : 260,
    y : 480,
    src : 'text',
    desc : 'text'
  },
  {
    x : 180,
    y : 510,
    src : 'text',
    desc : 'text'
  },{
    x : 700,
    y : 620,
    src : 'text',
    desc : 'text'
  },{
    x : 220,
    y : 580,
    src : 'text',
    desc : 'text'
  },{
    x : 650,
    y : 670,
    src : 'text',
    desc : 'text'
  },{
    x : 760,
    y : 510,
    src : 'text',
    desc : 'text'
  },{
    x : 400,
    y : 400,
    src : 'text',
    desc : 'text'
  },{
    x : 400,
    y : 600,
    src : 'text',
    desc : 'text'
  },{
    x : 500,
    y : 400,
    src : 'text',
    desc : 'text'
  },{
    x : 650,
    y : 400,
    src : 'text',
    desc : 'text'
  },{
    x : 690,
    y : 500,
    src : 'text',
    desc : 'text'
  }];

  

  const sensitivity = 10
  const innerRef = useRef(null);
  const canvasRef = useRef(null);
 // const showPopUp = false;
  const currentPopUp = locations[0];

  const [xCoord, setxCoord] = useState(0);
  const [yCoord, setyCoord] = useState(0);
  const [playerTag, setPlayerTag] = useState("1");


const distance = (x0, y0, x1, y1) => {
  return (400 >= (x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1))
}

const redrawAll = (canvasRef, x, y) => {
  const context = canvasRef.current.getContext('2d')
    var img = new Image();
    img.src = map; 
    img.onload = function(){
      context.drawImage(img, 0,0, img.width, img.height, 0,0,1080, 720);
      var player = new Image();
      player.src = logo
      context.drawImage(player, x, y, 20, 20);
      context.fillRect(910,430, 20, 20) //gesling
      context.fillRect(260,480, 20, 20) //weh
      context.fillRect(180,510, 20, 20) //hh
      context.fillRect(700,620 , 20, 20) //pos
      context.fillRect(220,580 , 20, 20) //ph
      context.fillRect(650, 670 , 20, 20) //hoa
      context.fillRect(760,510, 20, 20) //mm
      context.fillRect(400,400, 20, 20) //ghc
      context.fillRect(400,600, 20, 20) //baker
      context.fillRect(500,400, 20, 20) //purnell
      context.fillRect(650,400, 20, 20) //cuc
      context.fillRect(690,500, 20, 20) //hunt





  }
}
    

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);
  
  
  if (canvasRef.current) {
    redrawAll(canvasRef, xCoord, yCoord);

    locations.map( location => {
      if (distance(xCoord, yCoord, location.x, location.y)){
      //  showPopUp = true
      //  currentPopUp = location
      }
    })
    //showPopUp = false
  }

  

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [xCoord, yCoord]);

const handleSubmit = () => {
 
  let databody = {
    "_id": playerTag,
    x: xCoord,
    y: yCoord
  };
  console.log(databody);
  return fetch("http://localhost:8000/person", {
    method: "POST",
    body: JSON.stringify(databody),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};


const handleKeyDown = async (event) => {
    if (event.key == 'ArrowDown'){
      setyCoord(yCoord + sensitivity);
      await handleSubmit();
    }
    else if (event.key == 'ArrowUp'){
      setyCoord(yCoord - sensitivity);
      await handleSubmit();
    }
    else if (event.key == 'ArrowLeft'){
      setxCoord(xCoord - sensitivity);
      await handleSubmit();
    }
    else if (event.key == 'ArrowRight'){
      setxCoord(xCoord + sensitivity);
      await handleSubmit();
    }
    redrawAll(canvasRef, xCoord, yCoord);
  };


  
  return (
    <div className="App" ref = {innerRef}>      
        <canvas ref = {canvasRef} width = {1080} height = {720} id = "map"></canvas>
      
        <PopUp location = {currentPopUp} />
     
   
    </div>
  );
}

export default App;
