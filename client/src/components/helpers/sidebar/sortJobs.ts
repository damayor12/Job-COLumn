import { Job, Sort } from '../interfaces';

function parseDate(date: string) {
  return new Date(date.split('/').reverse().join('/'));
}

function sortByFromCategory(category: string): string {
  if (category === 'Location') return 'locationName';
  if (category === 'Salary') return 'minimumSalary';
  if (category === 'Expiry Date') return 'expirationDate';
  if (category === 'Posted Date') return 'date';
  if (category === 'Job Title') return 'jobTitle';
  return 'jobTitle';
}

export function sortJobs(jobs: Job[], { category, order }: Sort) {
  return jobs.sort((a: any, b: any) => {
    let sortBy = sortByFromCategory(category);
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
