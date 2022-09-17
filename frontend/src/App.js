import map from './images/map.jpg';
import './App.css';
import logo from './images/logo.svg';

function App() {

  const onRightArrowPress = () => {

  };



  return (
    <div className="App">      
        <img src={map} className="Map" alt="map" />
        <img src={logo} className="PlayerObject" alt="player"/>
    </div>
  );
}

export default App;
