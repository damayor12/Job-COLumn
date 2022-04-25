// Local imports
import { numberFormatter, rose } from '../index';

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
        <div style={{ color: rose(darkMode) }}>
          {location}
        </div>
      </div>
      {/* Salary */}
      <div className='user-details'>
        <div>
          Current Salary
        </div>
        <div style={{ color: rose(darkMode) }}>
          {`£${numberFormatter(salary)}`}
        </div>
      </div>
    </div>
  );
}