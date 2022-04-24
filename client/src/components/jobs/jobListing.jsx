// Package imports
import { useContext, useState } from 'react';
import { Colors, Dialog, Icon } from '@blueprintjs/core';

// Local imports
import { CitiesContext, ThemeContext, UserContext } from '../../App';
import Details from './details';

// Styles
import './jobListing.scss';

function JobListing ({ job }) {
  const {
    jobTitle,
    minimumSalary,
    maximumSalary,
    date,
    expirationDate,
    employerName,
    locationName
  } = job

  // Contexts and states
  const [darkMode] = useContext(ThemeContext);
  const [user] = useContext(UserContext);
  const CITIES = useContext(CitiesContext);
  const [isOpen, setIsOpen] = useState(false);

  // Salary math
  const userIndex = CITIES
    .find(city => city.name === user.location)
    .index;
  const jobIndex = CITIES
    .find(city => city.name === locationName)
    .index;
  const isBetter = (minimumSalary / user.salary) / (jobIndex / userIndex) > 1;

  // Add thousands separator
  const minimum = minimumSalary.toLocaleString('en-US');
  const maximum = maximumSalary.toLocaleString('en-US');

  return (
    <div
      className='job-listing'
      onClick={() => setIsOpen(true)}
      style={{ color: `${
        isBetter && (darkMode ? Colors.ROSE5 : Colors.ROSE1)
      }` }}
    >
      <Dialog
        isCloseButtonShown={false}
        isOpen={isOpen}
        onClose={() => {setIsOpen(false)}}
        title={jobTitle}
      >
        <Details job={job} />
      </Dialog>
      {/* Title */}
      <div className='job-listing-row'>
        <div className='job-title'>
          {jobTitle}
        </div>
      </div>
      {/* Salary */}
      <div className='job-listing-row'>
        <div className='job-salary'>
          £{minimum} - £{maximum}
        </div>
      </div>
      {/* Dates */}
      <div className='job-listing-row'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      {/* Company and location */}
      <div className='job-listing-row'>
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
