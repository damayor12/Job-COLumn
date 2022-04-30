function parseDate(date: string) {
  return new Date(date.split('/').reverse().join('/'));
}

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

interface Sort {
  category: string;
  order: string;
}

export function sortJobs(jobs: Job[], { category, order }: Sort) {
  return jobs.sort((a: any, b: any) => {
    let sortBy = '';
    switch (category) {
      case 'Location':
        sortBy = 'locationName';
        break;
      case 'Salary':
        sortBy = 'minimumSalary';
        break;
      case 'Expiry Date':
        sortBy = 'expirationDate';
        break;
      case 'Posted Date':
        sortBy = 'date';
        break;
      case 'Job Title':
        sortBy = 'jobTitle';
        break;
      default:
        sortBy = 'jobTitle';
    }

    let direction: number;
    if (sortBy === 'expirationDate' || sortBy === 'date') {
      direction =
        (parseDate(a[sortBy]) as unknown as number) - (parseDate(b[sortBy]) as unknown as number);
    } else if (typeof a[sortBy] === 'string') {
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) direction = 1;
      else direction = -1;
    } else {
      direction = a[sortBy] - b[sortBy];
    }
    if (order === 'asc') return direction;
    return -direction;
  });
}
