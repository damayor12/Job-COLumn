const request = require('supertest');
import { app } from '../index';

jest.mock('../models/jobs.schema', () => () => {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();
  return dbMock.define('Jobs', {
    id: 1,
    jobId: 123,
    employerId: 123,
    employerName: 'Apple',
    employerProfileId: 456,
    employerProfileName: 'Apple Inc',
    jobTitle: 'Product Manager',
    locationName: 'California',
    minimumSalary: 50000,
    maximumSalary: 80000,
    currency: 'USD',
    expirationDate: '25/08/2022',
    date: '2022-05-03T13:10:20.782Z',
    jobDescription: 'the best job',
    applications: 20,
    jobUrl: 'www.google.com',
  });
});

describe('Test route endpoints', () => {
  it('get /api/models/all status 200 with token', (done) => {
    request(app).get('/jobs').expect(200, done);
  });

  it('expect to return an array', () => {
    request(app)
      .get('/jobs')
      .then((response: any) => expect(response.body).toBeTruthy());
  });

   it('expect one document', (done) => {
    request(app)
      .get('/jobs')
      .then((response: any) => expect(response.body).toHaveLength(1));
    done()
  });
});
