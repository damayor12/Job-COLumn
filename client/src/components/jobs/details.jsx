// Package imports
import { useContext } from 'react';
// This gets rid of the '$#number;' in the job description
import { decode } from 'he';

// Local imports
import { UserContext } from '../../App';
import { numberFormatter } from '../helpers';
import Anchor from '../small/buttons/anchor';
import Button from '../small/buttons/primaryButton';
import Map from './map';

// Styles
import './details.scss';

function Details ({ job }) {
  const {
    date,
    employerName,
    expirationDate,
    jobDescription,
    jobUrl,
    locationName,
    minimumSalary,
    maximumSalary
  } = job
  // Contexts
  const [user] = useContext(UserContext);

  return (
    <div className='details'>
      {/* Salary and Apply button */}
      <div className='details-row'>
        <div className='job-salary'>
          £{numberFormatter(minimumSalary)} - £{numberFormatter(maximumSalary)}
        </div>
        <div>
          <Anchor href={jobUrl}>
            <Button
              ariaLabel='Apply'
              icon='open-application'
              text='Apply'
            />
          </Anchor>
        </div>
      </div>
      {/* Dates */}
      <div className='details-row'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      {/* Company name */}
      <div className='details-row'>
        <div>
          Employer: {employerName}
        </div>
      </div>
      {/* Map */}
      <div className='details-row map'>
        <Map
          userLocation={user.location}
          jobLocation={locationName}
        />
      </div>
      {/* Job description */}
      <div className='description'>
        {decode(jobDescription)}
      </div>
    </div>
  );
}

export default Details;
