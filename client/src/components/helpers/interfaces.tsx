import { FormGroupProps } from '@blueprintjs/core';

export interface Job {
  id: number,
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

export interface City {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}


export interface UserFormProps extends FormGroupProps {
  defaultValue: number;
  onValueChange: (value: number) => void;
  buttonOnClick: () => void;
}

export interface Sort {
  category: string;
  order: string;
}

export interface UserDetailsProps {
  location: string,
  salary: number
}

export interface SortDefinedProps {
  filterAndSort: (event: React.MouseEvent<HTMLElement>) => void;
  sortOrder: string;
  sortOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface FilterProps {
  keywords: string;
  keywordsOnChange: React.ChangeEventHandler<HTMLInputElement>;
  numericOnChange: (value: number) => void;
}

export interface Filter {
  keywords: string;
  cities: string[];
  salary: number;
}

export interface Item {
  name: string;
  index: number;
  latitude: number;
  longitude: number;
}
