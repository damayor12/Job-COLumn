// Package imports
import { useContext, useEffect } from 'react';
import { Spinner } from '@blueprintjs/core';

// Local imports
import Sidebar from '../sidebar/sidebar';
import { FilteredJobsContext, JobsContext } from '../../App';
import { getAllJobs } from '../../services/api';
import JobListing from './jobListing';
import './jobs.scss';

function Jobs () {
  const [jobs, setJobs] = useContext(JobsContext);
  const [filteredJobs, setFilteredJobs] = useContext(FilteredJobsContext);

  // Get all jobs once
  useEffect(() => {
    getAllJobs()
      .then(result => {
        setJobs(result.slice(0, 1000));
        setFilteredJobs(result.slice(0, 1000));
      });
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='all-jobs'>
        {filteredJobs.length
          ? filteredJobs.map(job => <JobListing key={job.id} job={job} />)
          : <Spinner />}
      </div>
    </main>
  );
}

export default Jobs;
