// Package imports
import { useContext } from 'react';

// Local imports
import { UserContext } from '../../App';
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

  // Add thousands separator
  const minimum = minimumSalary.toLocaleString('en-US');
  const maximum = maximumSalary.toLocaleString('en-US');

  // This gets rid of the '$#number;' in the job description
  function decodeHtml(html) {
    const text = document.createElement('textarea');
    text.innerHTML = html;
    return text.value;
  }

  return (
    <div className='details'>
      {/* Salary and Apply button */}
      <div className='details-row'>
        <div className='job-salary'>
          £{minimum} - £{maximum}
        </div>
        <div>
          <a
            href={jobUrl}
            target='_blank'
            rel='noreferrer'
          >
            <Button
              ariaLabel='Apply'
              icon='open-application'
              text='Apply'
            />
          </a>
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
        {decodeHtml(jobDescription)}
      </div>
    </div>
  );
}

export default Details;
