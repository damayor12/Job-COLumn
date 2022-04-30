// Package imports

import axios, { AxiosResponse} from 'axios';

// Local imports
const rootUrl = 'http://127.0.0.1:3001';

export async function getAllJobs() {
  try {
    const jobs: AxiosResponse = await axios.get(`${rootUrl}/jobs`);
    return jobs.data;
  } catch (error: any) {
    console.error('Error getting all jobs:', error.message);
  }
}
