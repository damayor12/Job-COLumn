// Package imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from "@blueprintjs/core";

// Local imports
import './index.css';
import App from './App';
import Welcome from './components/welcome';
import Jobs from './components/jobs';
import AllJobs from './components/jobs/allJobs';
import Details from './components/details';
import Error from './components/error';

// Styling
// ? Removing this changes nothing?
import '../node_modules/normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
        {/* <Route path='/' element={<Navigate to='/welcome' />} > */}
          <Route path='welcome' element={<Welcome />} />
          <Route path='jobs' element={<Jobs />} >
            <Route index element={<AllJobs />} />
            <Route path=':jobId' element={<Details />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
