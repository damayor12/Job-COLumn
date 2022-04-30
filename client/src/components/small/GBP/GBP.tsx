// Local imports
// import { ReactComponent as Icon } from './GBP.svg';
// const logo = require('./GBP.svg') as string;

// function GBP() {
//   return (

//       <img src={logo} alt="alt" />
//     </span>
//   );
// }

// export default GBP;

import React from 'react';
import { ReactComponent as Icon } from './GBP.svg';

function GBP() {
  return (
    // <svg height="100" width="100">
    //   <circle cx="50" cy="50" r="40" fill="white"></circle>
    //   <Icon x="11" y="11" width={'80%'} height={'80%'} />
    // </svg>
    <span aria-hidden="true" className="bp4-icon">
      <Icon className="logo" />
    </span>
  );
}

export default GBP;
