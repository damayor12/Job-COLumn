// Local imports
import { numberFormatter } from '../index';

export function userDetails (darkMode, {
  location,
  salary
}) {
  return (
    <div>
      {/* Location */}
      <div className='user-details'>
        <div>
          Current Location
        </div>
        <div className='rose'>
          {location}
        </div>
      </div>
      {/* Salary */}
      <div className='user-details'>
        <div>
          Current Salary
        </div>
        <div className='rose'>
          {`£${numberFormatter(salary)}`}
        </div>
      </div>
    </div>
  );
}