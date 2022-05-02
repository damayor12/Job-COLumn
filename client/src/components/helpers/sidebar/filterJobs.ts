interface Job {
  jobId: number;
  employerId: number;
  employerName: string;
  employerProfileId: number;
  employerProfileName: string;
  jobTitle: string;
  locationName: string;
  minimumSalary: number;
  maximumSalary: number;
  currency: string;
  expirationDate: string;
  date: string;
  jobDescription: string;
  applications: number;
  jobUrl: string;
}

interface Filter {
  keywords: string;
  cities: string[];
  salary: number;
}

export const filterJobs = (jobs: Job[], { keywords, cities, salary }: Filter) => {
  return jobs.filter((job) => {
    let result = true;
    if (keywords) {
      result &&= keywords
        .split(' ')
        .every(
          (keyword) =>
            job.jobTitle.toLowerCase().includes(keyword.toLowerCase()) ||
            job.jobDescription.toLowerCase().includes(keyword.toLowerCase()),
        );
    }
    if (cities.length) {
      result &&= cities.includes(job.locationName);
    }
    if (salary) {
      result &&= job.minimumSalary >= salary;
    }
    return result;
  });
};
