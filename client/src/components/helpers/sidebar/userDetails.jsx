// Local imports
import { rose } from '../index';

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
          {`£${salary.toLocaleString('en-US')}`}
        </div>
      </div>
    </div>
  );
}