// Package imports
// import { createContext/* , useState */ } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';

// Local imports
import Jobs from './components/jobs/jobs';
import Error from './components/small/error/error';
import Welcome from './components/welcome/welcome';
import { ThemeProvider } from './components/contexts/theme';
import { UserProvider } from './components/contexts/user';
// import { CitiesProvider } from './components/contexts/cities';
import { JobsProvider } from './components/contexts/jobs';
import { FilterProvider } from './components/contexts/filter';
import { FilteredJobsProvider } from './components/contexts/filteredJobs';
import { SortProvider } from './components/contexts/sort';

// Other imports
// import CITIES from './components/contexts/cities.json';

// Styling
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './App.scss';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

// Contexts
// TODO check out react-query
// TODO if time, create persistent session storage for user, filters, sort, dark/light mode
// export const ThemeContext = createContext();
// export const CitiesContext = createContext(CITIES);
// export const JobsContext = createContext();
// export const FilterContext = createContext();
// export const FilteredJobsContext = createContext();
// export const SortContext = createContext();

function App () {
  // States
  // const [darkMode, toggleDarkMode] = useState(true);
  // const [jobs, setJobs] = useState([]);
  // const [filters, setFilters] = useState({
  //   keywords: '',
  //   cities: [],
  //   salary: 0
  // });
  // const [filteredJobs, setFilteredJobs] = useState([]);
  // const [sort, setSort] = useState({
  //   category: 'Job Title',
  //   order: 'asc'
  // });

  // // Because BlueprintJS' dark mode toggle sucks
  // document.body.className = `${darkMode ? 'bp4-dark background-dark' : 'bp4-body background-light'}`
  // function toggleTheme () {
  //   toggleDarkMode(mode => !mode);
  // }

  // TODO add README.md in root directory

  // TODO refactor contexts to not be so nested. Redux? Reducers?
  // https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p
  return (
    <ThemeProvider>
      <UserProvider>
        {/* <CitiesProvider> */}
          <JobsProvider>
            <FilterProvider>
              <FilteredJobsProvider>
                <SortProvider>
                  <Router>
                    <Routes>
                      <Route path='/' element={<Welcome />} />
                      <Route path='/jobs' element={<Jobs />} />
                      <Route path='/*' element={<Error />} />
                    </Routes>
                  </Router>
                </SortProvider>
              </FilteredJobsProvider>
            </FilterProvider>
          </JobsProvider>
        {/* </CitiesProvider> */}
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
