// Package imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Local imports
import './index.scss';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);
