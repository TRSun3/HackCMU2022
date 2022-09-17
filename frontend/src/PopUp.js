// export default function PopUp (location) {
//     console.log("Inside popup", location)
//     return (
//         <h1>
//             {location.src}
//         </h1>
//     )
// }

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopUp (location){
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>well this works!</div>
  </Popup>
};

