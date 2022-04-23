
// Package imports
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors, H5, Icon, InputGroup, NumericInput } from '@blueprintjs/core';

// Local imports
import Logo from '../logo/logo';
import { FilterContext, UserContext, SortContext, ThemeContext } from '../../App';
import PrimaryButton from '../smol/buttons/primaryButton';
import SecondaryButton from '../smol/buttons/secondaryButton';
import BackButton from '../smol/buttons/backButton';
import ToggleDarkMode from '../smol/buttons/toggleDarkMode';
import SortSelector from '../smol/select/sorts';
import Divider from '../smol/divider';
import GBP from '../smol/GBP/GBP';
import './sidebar.scss';
import MultipleCitiesSelector from '../smol/select/multipleCities';

function Sidebar () {
  const navigate = useNavigate();
  const [userDetails,] = useContext(UserContext);
  const [darkMode,] = useContext(ThemeContext);
  const [filters, setFilters] = useContext(FilterContext);
  const [sort, setSort] = useContext(SortContext);

  return (
    <nav>
      <header>
        <Logo />
      </header>
      <Divider />
      <ToggleDarkMode
        text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`}
      />
      <Divider />
      <div>
        <div className='user-details'>
          <div>
            Current Location
          </div>
          <div style={{
            color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
          }}>
            {userDetails.location}
          </div>
        </div>
        <div className='user-details'>
          <div>
            Current Salary
          </div>
          <div style={{
            color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
          }}>
            {`£${userDetails.salary.toLocaleString('en-US')}`}
          </div>
        </div>
      </div>
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
            {/* TODO ? What happens to my filter state now?  */}
            <MultipleCitiesSelector />
            {/* <InputGroup
              fill
              defaultValue={filters[1]}
              leftIcon='map-marker'
              onChange={e => setFilters([
                filters.keywords,
                e.target.value,
                filters[2]
              ])}
              placeholder='Desired City/Cities'
            /> */}
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
              // TODO bring back if the fucking margin BS isn't working
              // buttonPosition={Position.LEFT}
              leftIcon={<GBP />}
              // TODO figure out how to add commas in display
              // locale='en-US'
              majorStepSize='10000'
              min={0}
              onValueChange={value => setFilters({
                ...filters,
                salary: value
              })}
              placeholder='Desired Salary'
              stepSize='1000'
            />
          </div>
        </div>
      </div>
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
      <PrimaryButton
        icon='search'
        // TODO should instead filter jobs state using filters state
        onClick={() => navigate('/jobs/46589185')}
      />
      <BackButton />
      <Divider />
    </nav>
  );
}

export default Sidebar;
