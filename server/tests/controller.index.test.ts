import supertest from 'supertest';
import createServer from './utils';

// import { app } from '../index';


import db from '../models/index';

import SequelizeMock from 'sequelize-mock';

describe('GET endpoint', () => {
  
  const app = createServer();
  const request = supertest(app);

  const dbMock = new SequelizeMock();
  const JobMock = dbMock.define('job', {
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


  test('should return a job with a jobId', async () => {
    const result = await JobMock.findAll();
    expect(result[0].jobId).toEqual(123);
  });

  test('should get the /jobs endpoint', async () => {
    await db.connection.sync();
    const res = await request.get('/jobs');
    expect(res.body[0].id).toEqual(1);
    expect(res.statusCode).toEqual(200);
  });

  afterAll(() => {
    db.connection.close();
  });
});
