// Package imports
import axios from 'axios';

// Local imports
const rootUrl = 'http://127.0.0.1:3001'

export async function getAllJobs () {
  try {
    const jobs = await axios.get(`${rootUrl}/jobs`);
    return jobs.data;
  } catch (error) {
    console.error('Error getting all jobs:', error.message);
  }
}
