// Package imports
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors, Icon } from '@blueprintjs/core';

// Local imports
import { CitiesContext, ThemeContext, UserContext } from '../../App';
import './jobListing.scss';

function JobListing ({ job }) {
  const {
    jobId,
    jobTitle,
    minimumSalary,
    maximumSalary,
    date,
    expirationDate,
    employerName,
    locationName
  } = job
  const navigate = useNavigate();
  const [darkMode,] = useContext(ThemeContext);
  const [user,] = useContext(UserContext);
  const CITIES = useContext(CitiesContext);

  // Salary math
  const userIndex = CITIES
    .find(city => city.name === user.location)
    .index;
  const jobIndex = CITIES
    .find(city => city.name === locationName)
    .index;
  const isBetter = (minimumSalary / user.salary) / (jobIndex / userIndex) > 1;

  return (
    <div
      className='job-listing'
      onClick={() => navigate(`/jobs/${jobId}`)}
      style={{ color: `${
        isBetter
          && (darkMode ? Colors.ROSE5 : Colors.ROSE1)
      }` }}
    >
      <div className='job-listing-row'>
        <div className='job-title'>
          {jobTitle}
        </div>
      </div>
      <div className='job-listing-row'>
        <div className='job-salary'>
          £{minimumSalary.toLocaleString('en-US')} - £{maximumSalary.toLocaleString('en-US')}
        </div>
      </div>
      <div className='job-listing-row job-listing-secondary'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      <div className='job-listing-row job-listing-secondary'>
        <div>
          {employerName}
        </div>
        <div>
          <Icon icon='map-marker' /> {locationName}
        </div>
      </div>
    </div>
  );
}

export default JobListing;