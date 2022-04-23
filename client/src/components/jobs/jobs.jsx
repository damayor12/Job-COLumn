// Package imports
import { useContext, useEffect } from 'react';
import { Spinner } from '@blueprintjs/core';

// Local imports
import Sidebar from '../sidebar/sidebar';
import { JobsContext } from '../../App';
import { getAllJobs } from '../../services/api';
import JobListing from './jobListing';
import './jobs.scss';

function Jobs () {
  const [jobs, setJobs] = useContext(JobsContext);

  // Get all jobs once
  useEffect(() => {
    getAllJobs()
      .then(result => setJobs(result.slice(0, 1000)));
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='all-jobs'>
        {jobs.length
          ? jobs.map(job => <JobListing key={job.id} job={job} />)
          : <Spinner />
        }
      </div>
    </main>
  );
}

export default Jobs;
