// React imports
import { useContext } from 'react';

// BlueprintJS imports
import { Colors, H5, Icon, InputGroup, NumericInput } from '@blueprintjs/core';

// Local component imports
import Logo from '../logo/logo';
import { FilterContext, UserContext, SortContext, ThemeContext, FilteredJobsContext, JobsContext } from '../../App';
import PrimaryButton from '../smol/buttons/primaryButton';
import SecondaryButton from '../smol/buttons/secondaryButton';
import BackButton from '../smol/buttons/backButton';
import ToggleDarkMode from '../smol/buttons/toggleDarkMode';
import SortSelector from '../smol/select/sorts';
import MultipleCitiesSelector from '../smol/select/multipleCities';
import Divider from '../smol/divider';
import GBP from '../smol/GBP/GBP';

// Styling
import './sidebar.scss';

function Sidebar () {
  // Contexts
  const [user,] = useContext(UserContext);
  const [darkMode,] = useContext(ThemeContext);
  const [filters, setFilters] = useContext(FilterContext);
  const [jobs] = useContext(JobsContext);
  const [, setFilteredJobs] = useContext(FilteredJobsContext);
  const [sort, setSort] = useContext(SortContext);

  return (
    <nav>
      {/* Header and dark mode */}
      <header>
        <Logo />
      </header>
      <Divider />
      <ToggleDarkMode
        text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`}
      />
      {/* User details */}
      <Divider />
      <div>
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
        <H5 className="bp4-heading" style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}>
          <Icon icon='filter'/> Filter
        </H5>
        <div className='filter-details'>
          <div className='filter-label'>
            Keywords
          </div>
          <div className='filter-value'>
            <InputGroup
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
        </div>
        <div className='filter-details'>
          <div className='filter-label'>
            Location(s)
          </div>
          <div className='filter-value'>
            <MultipleCitiesSelector />
          </div>
        </div>
        <div className='filter-details'>
          <div className='filter-label'>
            Salary
          </div>
          <div className='filter-value'>
            <NumericInput
              fill
              // TODO refactor to its own component
              leftIcon={<GBP />}
              majorStepSize='10000'
              min={0}
              onValueChange={value => setFilters({
                ...filters,
                salary: value
              })}
              placeholder='Minimum Salary'
              stepSize='1000'
            />
          </div>
        </div>
      </div>
      {/* Sort options */}
      <Divider />
      <div className='filter-details'>
        <H5 className="bp4-heading" style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}>
          Sort by
        </H5>
        <SortSelector />
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
      </div>
      {/* Search and back */}
      <PrimaryButton
        icon='filter'
        // TODO should instead filter jobs state using filters state
        onClick={() => {
          setFilteredJobs(jobs
            .filter(job => {
              let result = true;
              if (filters.keywords) {
                // TODO fix split/non-split
                result = result && filters.keywords.split(' ').every(keyword => (
                  job.jobTitle.includes(keyword)
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
        }}
        text='Filter & Sort'
      />
      <BackButton />
      <Divider />
    </nav>
  );
}

export default Sidebar;
