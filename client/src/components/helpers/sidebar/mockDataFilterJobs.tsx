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

export const arrOfJobs : Job[] = [{
  'jobId' : 123,
  'employerId': 123,
  'employerName': 'test',
  'employerProfileId': 123,
  'employerProfileName': 'test',
  'jobTitle': 'developer',
  'locationName': 'London',
  'minimumSalary': 40000,
  'maximumSalary': 80000,
  'currency': 'GBP',
  'expirationDate' : '20/07/2022',
  'date': '02/05/22',
  'jobDescription': 'developer job',
  'applications': 5,
  'jobUrl': 'testUrl.com'
},
{
  'jobId' : 456,
  'employerId': 452,
  'employerName': 'test',
  'employerProfileId': 123,
  'employerProfileName': 'test',
  'jobTitle': 'tester',
  'locationName': 'London',
  'minimumSalary': 50000,
  'maximumSalary': 90000,
  'currency': 'GBP',
  'expirationDate' : '20/10/2022',
  'date': '02/05/22',
  'jobDescription': 'developer job',
  'applications': 5,
  'jobUrl': 'testUrl.com'
}]

interface Filter {
  keywords: string;
  cities: string[];
  salary: number;
}

export const filter : Filter = {
  keywords: 'test',
  cities: ['London'],
  salary: 40000
}

export const filter2 : Filter = {
  keywords: 'manager',
  cities: ['London'],
  salary: 40000
}