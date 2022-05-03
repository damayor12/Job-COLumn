import '@testing-library/jest-dom';
import { sortJobs } from './sortJobs';
import { arrOfJobs } from './mockDataFilterJobs';
import { Sort } from '../interfaces';


const sort : Sort = {
  category: 'Location',
  order: 'asc'
}

const sort2 : Sort = {
  category: 'Salary',
  order: 'asc'
}

const sort3 : Sort = {
  category: 'Expiry Date',
  order: 'asc'
}


describe('sortJobs', () => {
  test('sortJobs returns the same length of array passed in', () => {
    const length : number = arrOfJobs.length;
    expect(sortJobs(arrOfJobs, sort).length).toEqual(length);
  })

  test('sortJobs returns a sorted Jobs array by Location', () => {
    expect(sortJobs(arrOfJobs, sort)[0].locationName).toEqual('London');
  });


  test('sortJobs returns a sorted Jobs array by Salary', () => {
    expect(sortJobs(arrOfJobs, sort2)[0].minimumSalary).toEqual(40000);
  })

  test('sortJobs returns a sorted Jobs array by expirationDate', () => {
    expect(sortJobs(arrOfJobs, sort3)[0].expirationDate).toEqual('20/07/2022');
  })
});