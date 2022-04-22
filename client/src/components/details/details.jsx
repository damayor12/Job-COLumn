// Package imports
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';

// Local imports
import Sidebar from '../sidebar/sidebar';
import { getJob } from '../../services/api';
import DetailsListing from './detailsListing';

function Details () {
  const { jobId } = useParams();
  const [job, setJob] = useState({});

  // Get all jobs once
  useEffect(() => {
    getJob(jobId)
      .then(result => setJob(result));
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='details'>
        {job?.jobId
          ? <DetailsListing job={job} />
          : <Spinner />
        }
      </div>
    </main>
  );
}

export default Details;
