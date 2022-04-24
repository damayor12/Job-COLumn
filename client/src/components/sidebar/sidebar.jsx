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
import Numeric from '../smol/select/numeric';
import MultipleCitiesSelector from '../smol/select/multipleCities';
import Divider from '../smol/divider';
import GBP from '../smol/GBP/GBP';

// Styling
import css from '../../index.scss';
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
    <nav
      style={{
        backgroundColor: `${darkMode ? css.almostBlack : css.almostWhite}`
      }}
    >
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
          <MultipleCitiesSelector />
        </div>
        <div className='filter-details'>
          <div className='filter-label'>
            Salary
          </div>
          <div className='filter-value'>
            <Numeric
              fill={true}
              onValueChange={value => setFilters({
                ...filters,
                salary: value
              })}
              placeholder='Minimum Salary'
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
        <PrimaryButton
          icon='filter'
          onClick={() => {
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
          }}
          text='Lesgo'
        />
      </div>
      <Divider />
      <BackButton />
      <Divider />
    </nav>
  );
}

export default Sidebar;
