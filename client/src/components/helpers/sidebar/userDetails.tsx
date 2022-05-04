import { numberFormatter } from '../index';
import { UserDetailsProps } from '../interfaces';

export const userDetails: React.FC<UserDetailsProps> = ({ location, salary }) => {
  return (
    <div>
      <div className="user-details">
        <div>Current Location</div>
        <div className="rose">{location}</div>
      </div>
      <div className="user-details">
        <div>Current Salary</div>
        <div className="rose">{`£${numberFormatter(salary)}`}</div>
      </div>
    </div>
  );
};
