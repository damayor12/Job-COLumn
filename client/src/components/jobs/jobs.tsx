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
    user: [user, setUser],
  } = useGeneralContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllJobs(user.location).then((result) => {
      console.log('the result',result.results)
      setIsLoading(false);
      setJobs(result.results.slice(0, 200));
      setFilteredJobs(result.results.slice(0, 200));
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
