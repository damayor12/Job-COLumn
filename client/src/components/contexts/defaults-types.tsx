export interface Props {
  children: React.ReactNode;
}

export const defaultFilter = {
  keywords: '',
  cities: [],
  salary: 0,
};

export const defaultSortValues = {
  category: 'Job Title',
  order: 'asc',
};

export const defaultUser = {
  location: 'London',
  salary: 20_000,
};

//create General Context - Interfaces
export interface allContexts {
  filter: any[];
  filteredjobs: any[];
  jobs: any[];
  sort: any[];
  theme: any[];
  user: any[];
}

//create General Context - Init object
export const allContextProps = {
  filter: [defaultFilter, (): void => {}],
  filteredjobs: [[], (): void => {}],
  jobs: [[], (): void => {}],
  sort: [defaultSortValues, (): void => {}],
  theme: [true, () => {}],
  user: [defaultUser, (): void => {}],
};
