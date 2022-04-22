
// Package imports
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Colors, Divider, EditableText, H5 } from '@blueprintjs/core';

// Local imports
import Logo from '../../logo';
import { UserContext, ThemeContext } from '../../App';
import Button from '../smol/buttons/primaryButton';
import BackButton from '../smol/buttons/backButton';
import ToggleDarkMode from '../smol/buttons/toggleDarkMode';
import './sidebar.scss';

function Sidebar () {
  const navigate = useNavigate();
  const [userDetails,] = useContext(UserContext);
  const [darkMode,] = useContext(ThemeContext);

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
          <div className='user-value'>
            {userDetails[0]}
          </div>
        </div>
        <div className='user-details'>
          <div>
            Current Salary
          </div>
          <div className='user-value'>
            {userDetails[1]}
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <H5 className="bp4-heading" style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}>
          Filter
        </H5>
        <div>
          Keywords:
          <EditableText
            multiline
            confirmOnEnterKey
            // onConfirm={() => filter(value)}
          />
        </div>
        <div>
          Where:
          <form>
            <input
              type='text'
              // TODO add placeholder text for dropdown
              placeholder='London'
            />
          </form>
        </div>
        <div>
          Min Salary:
          <form>
            <input
              type='number'
              // TODO add placeholder text for numeric input
              placeholder='30000'
            />
          </form>
        </div>
      </div>
      <Divider />
      <div>
        <H5 className="bp4-heading" style={{
          color: `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
        }}>
          Sort
        </H5>
        <div>
          Location (Asc)
        </div>
        <div>
          Salary (Desc)
        </div>
        <div>
          Expiration Date (Asc)
        </div>
        <div>
          Title (Desc)
        </div>
      </div>
      <Button onClick={() => navigate('/jobs/1')} text='Search' icon='search' />
      {/* {CURRENT URL NOT '/jobs'} */1 && <BackButton />}
    </nav>
  );
}

export default Sidebar;
