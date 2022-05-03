import { decode } from 'he';
import React from 'react';
import { MaybeElement } from '@blueprintjs/core';
import { useUserContext } from '../contexts/user';
import { numberFormatter } from '../helpers';
import Anchor from '../small/buttons/anchor';
import Button from '../small/buttons/primaryButton';
import Map from './map';
import { Job } from '../helpers/interfaces';
import './details.scss';

interface Props {
  job: Job;
}

const Details: React.FC<Props> = ({ job }) => {

  const {
    date,
    employerName,
    expirationDate,
    jobDescription,
    jobUrl,
    locationName,
    minimumSalary,
    maximumSalary
  } = job;

  const [user] = useUserContext();

  return (
    <div className='details'>
      <div className='details-row'>
        <div className='job-salary'>
          £{numberFormatter(minimumSalary)} - £{numberFormatter(maximumSalary)}
        </div>
        <div>
          <Anchor href={jobUrl}>
            <Button
              ariaLabel='Apply'
              icon={'open-application' as unknown as MaybeElement}
              text='Apply'
            />
          </Anchor>
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
          Employer: {employerName}
        </div>
      </div>
      <div className='details-row map'>
        <Map
          userLocation={user.location}
          jobLocation={locationName}
        />
      </div>
      <div className='description'>
        {/* This gets rid of the '$#number;' in the job description */}
        {decode(jobDescription)}
      </div>
    </div>
  );
}

export default Details;
