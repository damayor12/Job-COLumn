// Package imports
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from "@blueprintjs/core";

// Local imports
import './App.scss';
import Welcome from './components/welcome/welcome';
import Jobs from './components/jobs/jobs';
import Details from './components/details/details';
import Error from './components/error/error';
import CITIES from './data/cities.json';
import JOBS from './data/jobs.json';

// Styling
// ? Removing this changes nothing?
import '../node_modules/normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

export const ThemeContext = createContext();
export const UserContext = createContext(['', 0]);
export const CitiesContext = createContext(CITIES);
export const JobsContext = createContext(CITIES);

function App () {
  const [darkMode, toggleDarkMode] = useState(true);
  const [userDetails, setUserDetails] = useState(['London', 20_000]);

  function toggleTheme () {
    toggleDarkMode(mode => !mode);
  }

  return (
    <ThemeContext.Provider value={[darkMode, toggleTheme]}>
      <UserContext.Provider value={[userDetails, setUserDetails]}>
        <CitiesContext.Provider value={CITIES}>
          <JobsContext.Provider value={JOBS}>
            <div className={darkMode ? 'bp4-dark' : ''}>
              <Router>
                <Routes>
                  <Route path='/' element={<Welcome />} />
                  <Route path='/jobs' element={<Jobs />} />
                  <Route path='/jobs/:jobId' element={<Details />} />
                  <Route path='/*' element={<Error />} />
                </Routes>
              </Router>
            </div>
          </JobsContext.Provider>
        </CitiesContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
