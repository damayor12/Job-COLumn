// Local imports
// import { ReactComponent as Icon } from './GBP.svg';
const logo = require('./GBP.svg') as string;

function GBP() {
  return (
    <span aria-hidden="true" className="bp4-icon">
      <img src={logo} alt="alt" />
    </span>
  );
}

export default GBP;
