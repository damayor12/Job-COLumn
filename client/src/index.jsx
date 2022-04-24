// Package imports
import { createRoot } from 'react-dom/client';

// Local imports
import App from './App';

// Styling
import './index.scss';

const root = createRoot(document.getElementById('root'));
// Strict mode incompatible with BlueprintJS lol.
root.render(
  <App />
);
