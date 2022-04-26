// Package imports
import { useState } from 'react';
import { Dialog, Icon } from '@blueprintjs/core';

// Local imports
import { useUserContext } from '../contexts/user';
import { numberFormatter } from '../helpers';
import CITIES from '../helpers/cities.json';
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
  const [user] = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

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
      className={`job-listing lighten-darken ${isBetter && 'rose'}`}
      onClick={() => setIsOpen(true)}
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
        <div className='job-listing-title'>
          {jobTitle}
        </div>
      </div>
      {/* Salary */}
      <div className='job-listing-row'>
        <div className='job-listing-salary'>
          £{numberFormatter(minimumSalary)} - £{numberFormatter(maximumSalary)}
        </div>
      </div>
      {/* Dates */}
      <div className='job-listing-row job-listing-info'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      {/* Company and location */}
      <div className='job-listing-row job-listing-info'>
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
