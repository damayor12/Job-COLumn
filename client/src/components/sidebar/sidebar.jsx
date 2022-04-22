
// Package imports
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Colors, Divider, H5, Icon, InputGroup, NumericInput, Position } from '@blueprintjs/core';

// Local imports
import Logo from '../../logo';
import { FilterContext, UserContext, SortContext, ThemeContext } from '../../App';
import PrimaryButton from '../smol/buttons/primaryButton';
import SecondaryButton from '../smol/buttons/secondaryButton';
import BackButton from '../smol/buttons/backButton';
import ToggleDarkMode from '../smol/buttons/toggleDarkMode';
import SortSelector from '../smol/select/sorts';
import GBP from '../smol/GBP';
import './sidebar.scss';

function Sidebar () {
  const navigate = useNavigate();
  const [userDetails,] = useContext(UserContext);
  const [darkMode,] = useContext(ThemeContext);
  const [filters, setFilters] = useContext(FilterContext);
  const [sort, setSort] = useContext(SortContext);

  return (
    <nav>
      <Link to='/jobs'>
        <Logo />
      </Link>
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
            {userDetails[0]}
          </div>
        </div>
        <div className='user-details'>
          <div>
            Current Salary
          </div>
          <div style={{
            color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
          }}>
            {`£${userDetails[1].toLocaleString('en-US')}`}
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
          <div>
            Keywords
          </div>
          <div>
            <InputGroup
              fill
              defaultValue={filters[0]}
              leftIcon='search'
              onChange={e => setFilters([
                e.target.value,
                ...filters.slice(1)
              ])}
              placeholder='Keywords'
            />
          </div>
        </div>
        <div className='filter-details'>
          <div>
            Location
          </div>
          <div>
            <InputGroup
              fill
              defaultValue={filters[1]}
              leftIcon='map-marker'
              onChange={e => setFilters([
                filters[0],
                e.target.value,
                filters[2]
              ])}
              placeholder='Desired City/Cities'
            />
          </div>
        </div>
        <div className='filter-details'>
          <div>
            Salary
          </div>
          <div>
            <NumericInput
              // TODO bring back if the fucking margin BS isn't working
              // buttonPosition={Position.LEFT}
              leftIcon={<GBP />}
              // TODO figure out how to add commas in display
              // locale='en-US'
              majorStepSize='10000'
              min={0}
              onValueChange={(value) => setFilters([
                ...filters.slice(0, 2),
                value
              ])}
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
            icon={`sort-${sort[1]}`}
          />}
          onClick={() => setSort([
            sort[0],
            `${sort[1] === 'asc' ? 'desc' : 'asc'}`
          ])}
        />
      </div>
      <PrimaryButton
        icon='search'
        onClick={() => navigate('/jobs/1')}
      />
      <BackButton />
    </nav>
  );
}

export default Sidebar;
