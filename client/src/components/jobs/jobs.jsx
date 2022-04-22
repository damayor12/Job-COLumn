// Package imports
import { useContext, useEffect } from 'react';
import { Spinner } from '@blueprintjs/core';

// Local imports
import Sidebar from '../sidebar/sidebar';
import { JobsContext } from '../../App';
import { getAllJobs } from '../../services/api';

function Jobs () {
  const [jobs, setJobs] = useContext(JobsContext);


  // Get all jobs once
  useEffect(() => {
    getAllJobs()
      .then(result => setJobs(result));
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='all-jobs'>
        <p>All jobs.</p>
        {jobs.length
          ? jobs.map(job => <div key={job.id}>
              <p>{job.jobId}</p>
            </div>)
          : <Spinner />
        }
      </div>
    </main>
  );
}

export default Jobs;
