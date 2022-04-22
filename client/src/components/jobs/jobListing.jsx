// Package imports
import { useNavigate } from 'react-router-dom';

// Local imports
import './jobListing.scss';
import { Icon } from '@blueprintjs/core';

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

  return (
    <div
      className='job-listing'
      onClick={() => navigate(`/jobs/${jobId}`)}
    >
      <div className='job-listing-row'>
        <div className='job-title'>
          {jobTitle}
        </div>
        <div className='job-salary'>
          £{minimumSalary.toLocaleString('en-US')} - {maximumSalary.toLocaleString('en-US')}
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