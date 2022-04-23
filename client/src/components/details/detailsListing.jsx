// Package imports
import { useContext } from 'react';
import { Colors, Icon } from '@blueprintjs/core';

// Local imports
import { ThemeContext } from '../../App';
import PrimaryButton from '../smol/buttons/primaryButton';
import SecondaryButton from '../smol/buttons/secondaryButton';
import './detailsListing.scss';

function DetailsListing ({ job }) {
  const [darkMode,] = useContext(ThemeContext);
  const {
    date,
    employerName,
    expirationDate,
    jobDescription,
    jobTitle,
    jobUrl,
    locationName,
    minimumSalary,
    maximumSalary
  } = job

  const minimum = minimumSalary.toLocaleString('en-US');
  const maximum = maximumSalary.toLocaleString('en-US');

  // This gets rid of the '$#number;' in the job description
  function decodeHtml(html) {
    const text = document.createElement("textarea");
    text.innerHTML = html;
    return text.value;
  }

  return (
    <div
      className='details-listing'
    >
      <div className='details-listing-row'>
        <div className='job-title'>
          {jobTitle}
        </div>
      </div>
      <div className="details-listing-row">
        <div className='job-salary'>
          £{minimum} - £{maximum}
        </div>
        <div>
          <PrimaryButton
            ariaLabel='Apply'
            icon='open-application'
            onClick={() => {
              window.location.href = jobUrl;
            }}
            text='Apply'
          />
        </div>
      </div>
      <div className='details-listing-row details-listing-secondary'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      <div className='details-listing-row details-listing-secondary'>
        <div>
          {employerName}
        </div>
        <div>
          <SecondaryButton
            icon={<Icon
              color={`${darkMode ? Colors.ROSE5 : Colors.ROSE1}`}
              icon='map-marker'
            />}
            // TODO go to GMaps URL from Thais
            // onClick={}
            text={locationName}
          />
        </div>
      </div>
      <div className='details-listing-row map'>
        <p>Map.</p>
      </div>
      <div className='description'>
        {decodeHtml(jobDescription)}
      </div>
    </div>
  );
}

export default DetailsListing;