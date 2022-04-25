// Package imports
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';

// Local imports
import Jobs from './components/jobs/jobs';
import Error from './components/small/error/error';
import Welcome from './components/welcome/welcome';

// Other imports
import CITIES from './cities.json';
import './App.scss';

// Styling
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

// Contexts
// TODO check out react-query
export const ThemeContext = createContext();
// TODO if time, create persistent session storage for user, filters, sort, dark/light mode
export const UserContext = createContext();
export const CitiesContext = createContext(CITIES);
export const JobsContext = createContext();
export const FilterContext = createContext();
export const FilteredJobsContext = createContext();
export const SortContext = createContext();

function App () {
  // States
  const [darkMode, toggleDarkMode] = useState(true);
  const [user, setUser] = useState({
    location: 'London',
    salary: 20_000
  });
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    keywords: '',
    cities: [],
    salary: 0
  });
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [sort, setSort] = useState({
    category: 'Job Title',
    order: 'asc'
  });

  // Because BlueprintJS' dark mode toggle sucks
  document.body.className = `${darkMode ? 'bp4-dark background-dark' : 'bp4-body background-light'}`
  function toggleTheme () {
    toggleDarkMode(mode => !mode);
  }

  // TODO add README.md in root directory

  // TODO refactor contexts to not be so nested. Redux? Reducers?
  // https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p
  return (
    <ThemeContext.Provider value={[darkMode, toggleTheme]}>
      <UserContext.Provider value={[user, setUser]}>
        <CitiesContext.Provider value={CITIES}>
          <JobsContext.Provider value={[jobs, setJobs]}>
            <FilterContext.Provider value={[filters, setFilters]}>
              <FilteredJobsContext.Provider value={[filteredJobs, setFilteredJobs]}>
                <SortContext.Provider value={[sort, setSort]}>
                  <Router>
                    <Routes>
                      <Route path='/' element={<Welcome />} />
                      <Route path='/jobs' element={<Jobs />} />
                      <Route path='/*' element={<Error />} />
                    </Routes>
                  </Router>
                </SortContext.Provider>
              </FilteredJobsContext.Provider>
            </FilterContext.Provider>
          </JobsContext.Provider>
        </CitiesContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
