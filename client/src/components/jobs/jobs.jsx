// Package imports
import { useContext, useEffect, useState } from 'react';
import { Spinner } from '@blueprintjs/core';

// Local imports
import { FilteredJobsContext, JobsContext } from '../../App';
import { getAllJobs } from '../../services/api';
import Sidebar from '../sidebar/sidebar';
import JobListing from './jobListing';

// Styling
import './jobs.scss';

function Jobs () {
  // Contexts
  const [, setJobs] = useContext(JobsContext);
  const [filteredJobs, setFilteredJobs] = useContext(FilteredJobsContext);
  const [isLoading, setIsLoading] = useState(true);
  // Get all jobs once
  useEffect(() => {
    getAllJobs()
      .then(result => {
        setIsLoading(false);
        setJobs(result.slice(0, 200));
        setFilteredJobs(result.slice(0, 200));
      });
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='all-jobs'>
        {filteredJobs.length
          ? filteredJobs.map(job => <JobListing key={job.id} job={job} />)
          : isLoading ? <Spinner /> : 'No jobs. Relax your filters.' }
      </div>
    </main>
  );
}

export default Jobs;
