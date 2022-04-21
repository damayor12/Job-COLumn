// Package imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from "@blueprintjs/core";

// Local imports
import './index.css';
import App from './App';

FocusStyleManager.onlyShowFocusOnTabs();

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path='/'
          element={<App />}
        />
      </Routes>
    </Router>
  </StrictMode>
);
