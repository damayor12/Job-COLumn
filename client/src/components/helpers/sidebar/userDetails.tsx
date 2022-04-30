// Local imports
import { numberFormatter } from '../index';

interface Props {
  location: string,
  salary: number
}
export const userDetails: React.FC<Props> = ({ location, salary }) => {
  return (
    <div>
      {/* Location */}
      <div className="user-details">
        <div>Current Location</div>
        <div className="rose">{location}</div>
      </div>
      {/* Salary */}
      <div className="user-details">
        <div>Current Salary</div>
        <div className="rose">{`£${numberFormatter(salary)}`}</div>
      </div>
    </div>
  );
};
