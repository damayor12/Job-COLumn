// Package imports
import { useContext, useState } from 'react';
import { Colors, Dialog, Icon } from '@blueprintjs/core';

// Local component imports
import { CitiesContext, ThemeContext, UserContext } from '../../App';
import Details from './details';

// Styles
import './jobListing.scss';

// This gets rid of the '$#number;' in the job description
function decodeHtml(html) {
  const text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
}

function JobListing ({ job }) {
  const {
    jobId,
    jobDescription,
    jobTitle,
    minimumSalary,
    maximumSalary,
    date,
    expirationDate,
    employerName,
    locationName
  } = job
  const [darkMode,] = useContext(ThemeContext);
  const [user,] = useContext(UserContext);
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

  const minimum = minimumSalary.toLocaleString('en-US');
  const maximum = maximumSalary.toLocaleString('en-US');

  return (
    <div
      className='job-listing'
      onClick={() => {
        setIsOpen(true)
        // TODO delete getJob from API service
        // TODO delete getJob back-end route
        // Use Apply button to open jobId.url
      }}
      style={{ color: `${
        isBetter
          && (darkMode ? Colors.ROSE5 : Colors.ROSE1)
      }` }}
    >
      <Dialog
        isOpen={isOpen}
        onClose={() => {setIsOpen(false)}}
        title={jobTitle}
      >
        <Details job={job} />
      </Dialog>
      <div className='job-listing-row'>
        <div className='job-title'>
          {jobTitle}
        </div>
      </div>
      <div className='job-listing-row'>
        <div className='job-salary'>
          £{minimum} - £{maximum}
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