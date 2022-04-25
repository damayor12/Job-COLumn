// Package imports
import { useContext } from 'react';
import { Colors, Divider, H5, Icon, InputGroup } from '@blueprintjs/core';

// Local imports
import { FilterContext, UserContext, SortContext, ThemeContext, FilteredJobsContext, JobsContext } from '../../App';
import Logo from '../small/logo/logo';

// Small components
import MultiCity from '../small/input/multipleCities';
import Numeric from '../small/input/numeric';
import Sorts from '../small/input/sorts';
import Back from '../small/buttons/backButton';
import PrimaryButton from '../small/buttons/primaryButton';
import SecondaryButton from '../small/buttons/secondaryButton';
import ToggleDarkMode from '../small/buttons/toggleDarkMode';

// Styling
import css from '../../App.scss';
import { footer } from '../../jsxElements';
import './sidebar.scss';

function Sidebar () {
  // Contexts
  const [user] = useContext(UserContext);
  const [darkMode] = useContext(ThemeContext);
  const [filters, setFilters] = useContext(FilterContext);
  const [jobs] = useContext(JobsContext);
  const [, setFilteredJobs] = useContext(FilteredJobsContext);
  const [sort, setSort] = useContext(SortContext);

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

  // TODO refactor for cleanliness
  return (
    <nav style={{
      backgroundColor: `${darkMode ? css.almostBlack : css.almostWhite}`
    }} >
      {/* Header and dark mode */}
      <header>
        <Logo />
      </header>
      <Divider />
      <ToggleDarkMode text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} />
      {/* User details */}
      <Divider />
      <div>
        {/* Location */}
        <div className='user-details'>
          <div>
            Current Location
          </div>
          <div style={{
            color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
          }}>
            {user.location}
          </div>
        </div>
        {/* Salary */}
        <div className='user-details'>
          <div>
            Current Salary
          </div>
          <div style={{
            color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
          }}>
            {`£${user.salary.toLocaleString('en-US')}`}
          </div>
        </div>
      </div>
      {/* Filter options */}
      <Divider />
      <div>
        <H5 className='bp4-heading' style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}>
          <Icon icon='filter'/> Filter
        </H5>
        {/* Keywords */}
        <div className='filter-details'>
          <div className='filter-label'>
            Keywords
          </div>
          <InputGroup
            className='filter-value'
            fill
            defaultValue={filters.keywords}
            leftIcon='search'
            onChange={e => setFilters({
              ...filters,
              keywords: e.target.value
            })}
            placeholder='Keywords'
          />
        </div>
        {/* Locations */}
        <div className='filter-details'>
          <div className='filter-label'>
            Locations
          </div>
          <MultiCity className='filter-value' />
        </div>
        {/* Salary */}
        <div className='filter-details'>
          <div className='filter-label'>
            Salary
          </div>
          <Numeric
            className='filter-value'
            fill={true}
            onValueChange={value => setFilters({
              ...filters,
              salary: value
            })}
            placeholder='Minimum Salary'
          />
        </div>
      </div>
      {/* Sort options */}
      <Divider />
      <div className='filter-details'>
        <H5 className='bp4-heading' style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}>
          Sort by
        </H5>
        <Sorts />
        <SecondaryButton
          icon={<Icon
            color={`${darkMode ? Colors.ROSE5 : Colors.ROSE1}`}
            icon={`sort-${sort.order}`}
          />}
          onClick={() => setSort({
            ...sort,
            order: `${sort.order === 'asc' ? 'desc' : 'asc'}`
          })}
        />
        <PrimaryButton
          icon='filter'
          onClick={filterAndSort}
          text='Lesgo'
        />
      </div>
      <Divider />
      <Back />
      {/* For mobile mode */}
      <Divider />
      {footer}
      <Divider />
    </nav>
  );
}

export default Sidebar;
