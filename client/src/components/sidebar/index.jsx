// Package imports
import { Link } from 'react-router-dom';

// Local imports
import Logo from '../../logo';
import BackButton from '../smol/backButton';

function Sidebar () {
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
        <button>
          Search
        </button>
      </div>
      {/* {CURRENT URL NOT '/jobs'} */1 && <BackButton />}
    </nav>
  );
}

export default Sidebar;
