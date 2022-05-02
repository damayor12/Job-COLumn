import '@testing-library/jest-dom';

import { filterJobs } from './filterJobs';
import { filter, filter2, arrOfJobs } from './mockDataFilterJobs';

describe('filterJobs returns filtered result', () => {
  test('filterJobs returns a filtered result', () => {
    const result = filterJobs(arrOfJobs, filter);
    expect(result.length).toEqual(1);
  });

  test('filterJobs returns nothing if no result', () => {
    const result = filterJobs(arrOfJobs, filter2);
    expect(result.length).toEqual(0);
  })
})