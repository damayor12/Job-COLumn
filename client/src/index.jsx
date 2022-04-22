// Package imports
import { createRoot } from 'react-dom/client';

// Local imports
import './index.scss';
import App from './App';

const root = createRoot(document.getElementById('root'));
// Strict mode incompatible with BlueprintJS lol.
root.render(
  <App />
);
