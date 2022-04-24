// React imports
import { useContext } from 'react';

// Local component imports
import { UserContext } from '../../App';
import PrimaryButton from '../smol/buttons/primaryButton';
import Map from '../smol/map';

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
  // Context
  const [user] = useContext(UserContext);

  const minimum = minimumSalary.toLocaleString('en-US');
  const maximum = maximumSalary.toLocaleString('en-US');

  // This gets rid of the '$#number;' in the job description
  function decodeHtml(html) {
    const text = document.createElement('textarea');
    text.innerHTML = html;
    return text.value;
  }

  return (
    <div
      className='details'
    >
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
            <PrimaryButton
              ariaLabel='Apply'
              icon='open-application'
              text='Apply'
            />
          </a>
        </div>
      </div>
      <div className='details-row'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      <div className='details-row'>
        <div>
          {employerName}
        </div>
      </div>
      <div className='details-row map'>
        <Map
          userLocation={user.location}
          jobLocation={locationName}
        />
      </div>
      <div className='description'>
        {decodeHtml(jobDescription)}
      </div>
    </div>
  );
}

export default Details;