import { useEffect, useState } from 'react';
import { Spinner } from '@blueprintjs/core';
import { useGeneralContext } from '../contexts/contexts';

import { getAllJobs } from '../../services/api';
import Sidebar from '../sidebar/sidebar';
import JobListing from './jobListing';
import './jobs.scss';

const Jobs: React.FC = () => {
  const {
    filteredjobs: [filteredJobs, setFilteredJobs],
    jobs: [, setJobs],
  } = useGeneralContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllJobs().then((result) => {
      setIsLoading(false);
      setJobs(result.slice(0, 200));
      setFilteredJobs(result.slice(0, 200));
    });
    // eslint-disable-ne xt-line
  }, []);

  return (
    <main>
      <Sidebar />
      <div className="all-jobs">
        {filteredJobs.length ? (
          filteredJobs.map((job: any) => <JobListing key={job.id} job={job} />)
        ) : isLoading ? (
          <Spinner />
        ) : (
          'No jobs. Lower your expectations.'
        )}
      </div>
    </main>
  );
};

export default Jobs;
