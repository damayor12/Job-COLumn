export interface Job {
  id?: number;
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

export interface CitiesInt {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}
