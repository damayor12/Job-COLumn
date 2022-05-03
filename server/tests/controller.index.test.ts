import request from 'supertest';
import { Express } from 'express-serve-static-core';

import getAllJobs from '../controllers/index';
import bootstrap from '../index';
import supertest from 'supertest';

const requestWithSuperTest = supertest(bootstrap);

describe('GET endpoint', () => {
  it('GET /jobs should show all jobs', async () => {
    const res = await requestWithSuperTest.get('/jobs');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
  })
})