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
export const JobsContext = createContext([]);
export const FilterContext = createContext(['', '', 0]);
export const SortContext = createContext(['Expiration Date', 'asc']);

function App () {
  const [darkMode, toggleDarkMode] = useState(true);
  const [userDetails, setUserDetails] = useState(['', 20_000]);
  const [jobs, setJobs] = useState(JOBS);
  const [filters, setFilters] = useState(['', '', 0]);
  const [sort, setSort] = useState(['Expiration Date', 'asc']);

  function toggleTheme () {
    toggleDarkMode(mode => !mode);
  }

  return (
    <ThemeContext.Provider value={[darkMode, toggleTheme]}>
      <UserContext.Provider value={[userDetails, setUserDetails]}>
        <CitiesContext.Provider value={CITIES}>
          <JobsContext.Provider value={[jobs, setJobs]}>
            <FilterContext.Provider value={[filters, setFilters]}>
              <SortContext.Provider value={[sort, setSort]}>
                <div style={{ height: '100vh' }}>
                  <div
                    className={darkMode ? 'bp4-dark background-dark' : 'background-light'}
                    style={{
                      height: '100%'
                    }}
                  >
                    <Router>
                      <Routes>
                        <Route path='/' element={<Welcome />} />
                        <Route path='/jobs' element={<Jobs />} />
                        <Route path='/jobs/:jobId' element={<Details />} />
                        <Route path='/*' element={<Error />} />
                      </Routes>
                    </Router>
                  </div>
                </div>
              </SortContext.Provider>
            </FilterContext.Provider>
          </JobsContext.Provider>
        </CitiesContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
