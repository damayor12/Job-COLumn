// Package imports
import { useContext } from 'react';
import { Divider } from '@blueprintjs/core';

// Local imports
import {
  FilterContext,
  UserContext,
  SortContext,
  ThemeContext,
  FilteredJobsContext,
  JobsContext
} from '../../App';
import {
  background,
  filtersDefined,
  footer,
  headerAndLogo,
  sortDefined,
  userDetails
} from '../../jsxElements';
import Back from '../small/buttons/backButton';
import ToggleDarkMode from '../small/buttons/toggleDarkMode';

// Styling
import './sidebar.scss';

function Sidebar () {
  // Contexts
  const [user] = useContext(UserContext);
  const [darkMode] = useContext(ThemeContext);
  const [filters, setFilters] = useContext(FilterContext);
  const [jobs] = useContext(JobsContext);
  const [, setFilteredJobs] = useContext(FilteredJobsContext);
  const [sort, setSort] = useContext(SortContext);

  // Filter functions
  function keywordsOnChange (e) {
    setFilters({
      ...filters,
      keywords: e.target.value
    });
  }

  function numericOnChange (value) {
    setFilters({
      ...filters,
      salary: value
    });
  }

  // Sort functions
  // TODO refactor for readability
  function filterAndSort () {
    setFilteredJobs(jobs
      .filter(job => {
        let result = true;
        if (filters.keywords) {
          result = result && filters.keywords.split(' ')
            .every(keyword => (
              job.jobTitle.toLowerCase().includes(keyword.toLowerCase())
              || job.jobDescription.toLowerCase().includes(keyword.toLowerCase())
            ))
        }
        if (filters.cities.length) {
          result = result && filters.cities.includes(job.locationName);
        }
        if (filters.salary) {
          result = result && job.minimumSalary >= filters.salary;
        }
        return result;
      })
      .sort((a, b) => {
        let sortBy = '';

        switch (sort.category) {
          case 'Location':
            sortBy = 'locationName';
            break;
          case 'Salary':
            sortBy = 'minimumSalary';
            break;
          case 'Expiry Date':
            sortBy = 'expirationDate';
            break;
          case 'Posted Date':
            sortBy = 'date';
            break;
          case 'Title':
            sortBy = 'jobTitle';
            break;
          default:
            sortBy = 'jobTitle';
        }

        let direction;
        if (sortBy === 'expirationDate' || sortBy === 'date') {
          direction = new Date(a[sortBy].split('/').reverse().join('/'))
            - new Date(b[sortBy].split('/').reverse().join('/'));
        } else if (typeof a[sortBy] === 'string') {
          if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) direction = 1;
          else direction = -1;
        } else {
          direction = a[sortBy] - b[sortBy];
        }
        if (sort.order === 'asc') return direction;
        return -direction;
      })
    )
  }

  function sortOnClick () {
    setSort({
      ...sort,
      order: `${sort.order === 'asc' ? 'desc' : 'asc'}`
    })
  }

  return (
    <nav style={{ backgroundColor: background(darkMode) }} >
      {/* Header and dark mode */}
      {headerAndLogo}
      <Divider />
      <ToggleDarkMode text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} />
      {/* User details */}
      <Divider />
      {userDetails(darkMode, user)}
      {/* Filter options */}
      <Divider />
      {filtersDefined(darkMode, {
        keywords: filters.keywords,
        keywordsOnChange,
        numericOnChange
      })}
      {/* Sort options */}
      <Divider />
      {sortDefined(darkMode, {
        filterAndSort,
        sortOrder: sort.order,
        sortOnClick
      })}
      <Divider />
      <Back />
      <Divider />
      {footer}
      {/* For mobile mode */}
      <Divider />
    </nav>
  );
}

export default Sidebar;
