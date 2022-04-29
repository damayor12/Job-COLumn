// Package imports
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
// Local imports
import App from './App';

// Styling
import './index.scss';

//<HTMLElement>
const root = createRoot(document.getElementById('root'));
// Strict mode incompatible with BlueprintJS lol.
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));
