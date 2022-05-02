import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import  JobListing  from './jobListing';

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

const testJob : Job = {
  jobId: 123,
  employerId: 123,
  employerName: 'WorldPay',
  employerProfileId: 123,
  employerProfileName: 'WorldPay123',
  jobTitle: 'Full Stack Developer',
  locationName: 'London',
  minimumSalary: 40000,
  maximumSalary: 60000,
  currency: 'GBP',
  expirationDate: '04/07/2022',
  date: '02/05/2022',
  jobDescription: 'test',
  applications: 10,
  jobUrl: 'http://example.com',
}

describe('JobListing renders the Job Props', () => {

  
  test('should render the Job object min and max salary', () => {
    render(<JobListing job={testJob}></JobListing>);
    expect(screen.getByTestId('job-listing-salary').textContent).toEqual('£40,000 - £60,000');
  })

  test('should render the Job posted on date', () => {
    render(<JobListing job={testJob}></JobListing>);
    expect(screen.getByTestId('job-listing-date-posted').textContent).toEqual(`Posted on ${testJob.date}`);
  })

  test('should render the Job expires on date', () => {
    render(<JobListing job={testJob}></JobListing>);
    expect(screen.getByTestId('job-listing-expires').textContent).toEqual(`Expires on ${testJob.expirationDate}`);
  })

  test('should render the Job employerName', () => {
    render(<JobListing job={testJob}></JobListing>);
    expect(screen.getByTestId('job-listing-employerName').textContent).toEqual(testJob.employerName);
  })

  test('should render the Job locationName', () => {
    render(<JobListing job={testJob}></JobListing>);
    expect(screen.getByTestId('job-listing-locationName').textContent).toContain(testJob.locationName);
  })

})