// Package imports

import axios, { AxiosResponse} from 'axios';

// Local imports
const rootUrl = 'http://127.0.0.1:3200';

const config = {
  headers: {
    auth: {
      username: '8d4619d0-baf8-4654-ae8f-f0edcf81ca83',
      password: '',
    },
  },
};

export async function getAllJobs() {
  try {
    const jobs: AxiosResponse = await axios.get(`${rootUrl}/jobs`);
    // const jobs: AxiosResponse = await axios.get(
    //   `https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london`, 
    // );

    
    return jobs.data;
  } catch (error: any) {
    console.error('Error getting all jobs:', error.message);
  }
}
