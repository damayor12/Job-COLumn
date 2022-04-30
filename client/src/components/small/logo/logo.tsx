// // Local imports
// import { ReactComponent as Icon } from './logo.svg';
// import React from 'react';


// function Logo() {
//   return <img className="logo" src={require('./logo.svg')} alt="alt logo" />;
// }

// export default Logo;

import React from 'react';
import { ReactComponent as Icon} from './logo.svg';

function Logo() {
  return (
    // <svg height="100" width="100">
    //   <circle cx="50" cy="50" r="40" fill="white"></circle>
    //   <Icon x="11" y="11" width={'80%'} height={'80%'} />
    // </svg>
    <Icon className='logo'/>
  );
}

export default Logo;
