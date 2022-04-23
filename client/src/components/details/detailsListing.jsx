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
          £{minimumSalary.toLocaleString('en-US')} - £{maximumSalary.toLocaleString('en-US')}
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
      <div
        className='description'
        // ! Don't use this if you don't trust the data
        dangerouslySetInnerHTML={{__html: `${jobDescription}`}}
      />
    </div>
  );
}

export default DetailsListing;