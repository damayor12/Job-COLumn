// Package imports
import { useEffect, useState } from 'react';
import { Spinner } from '@blueprintjs/core';

// Local imports
import { useFilteredJobsContext } from '../contexts/filteredJobs';
import { useJobsContext } from '../contexts/jobs';
import { getAllJobs } from '../../services/api';
import Sidebar from '../sidebar/sidebar';
import JobListing from './jobListing';

// Styling
import './jobs.scss';

interface Job {
    jobId: number,
    employerId: number,
    employerName: string,
    employerProfileId: number,
    employerProfileName: string,
    jobTitle: string,
    locationName: string,
    minimumSalary: number,
    maximumSalary: number,
    currency: string,
    expirationDate: string,
    date: string,
    jobDescription: string,
    applications: number,
    jobUrl: string,
}

const Jobs: React.FC = () => {
  // Contexts
  const [, setJobs] = useJobsContext();
  const [filteredJobs, setFilteredJobs] = useFilteredJobsContext();
  const [isLoading, setIsLoading] = useState(true);
  // Get all jobs once
  useEffect(() => {
    getAllJobs()
      .then(result => {
        setIsLoading(false);
        setJobs(result.slice(0, 200));
        setFilteredJobs(result.slice(0, 200));
      });
      // eslint-disable-ne xt-line
  }, []);

  return (
    <main>
      <Sidebar />
      <div className='all-jobs'>
        {filteredJobs.length
          ? filteredJobs.map(job => <JobListing key={job.id} job={job} />)
          : isLoading ? <Spinner /> : 'No jobs. Lower your expectations.' }
      </div>
    </main>
  );
}

export default Jobs;
