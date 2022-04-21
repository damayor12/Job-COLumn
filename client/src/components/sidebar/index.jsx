// Package imports
import { Link, useNavigate } from 'react-router-dom';

// Local imports
import Logo from '../../logo';
import Button from '../smol/buttons/primaryButton';
import BackButton from '../smol/buttons/backButton';

function Sidebar () {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to='/jobs'>
        <Logo />
      </Link>
      <div>
        <div>
          Current Location:
        </div>
        <div>
          Current Salary:
        </div>
      </div>
      <div>
        Filters:
        <div>
          Keywords:
          <form>
            <input
              type='text'
              placeholder='Software Engineer'
            />
          </form>
        </div>
        <div>
          Where:
          <form>
            <input
              type='text'
              placeholder='London'
            />
          </form>
        </div>
        <div>
          Min Salary:
          <form>
            <input
              type='number'
              placeholder='30000'
            />
          </form>
        </div>
      </div>
      <div>
        Sort by:
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
      <div>
        <Button onClick={() => navigate('/jobs/1')} text='Search' icon='search' />
      </div>
      {/* {CURRENT URL NOT '/jobs'} */1 && <BackButton />}
    </nav>
  );
}

export default Sidebar;
