import axios from 'axios';
import { getAllJobs } from './api';
import { Job } from '../components/helpers/interfaces'

jest.mock("axios");

const jobs : Job[] = [{
  "id": 1,
  "jobId": 46589185,
  "employerId": 300264,
  "employerName": "Client Server Ltd.",
  "employerProfileId": 123,
  "employerProfileName": 'Client Server Ltd.',
  "jobTitle": "Backend Developer Python Java Ruby - Remote",
  "locationName": "London",
  "minimumSalary": 50000,
  "maximumSalary": 75000,
  "currency": "GBP",
  "expirationDate": "17/05/2022",
  "date": "19/04/2022",
  "jobDescription": " Backend Developer (Python .Net Java JavaScript TDD) *Remote*. Looking for an opportunity to utilise your Backend Developer skills within a friendly and collaborative start-up where you'll gain exposure to cutting-edge cloud-based technologies? You could  be working alongside a talented team of developers within a relaxed work environment whilst enjoying perks including regular team social events. Successful FinTech is seeking a B... ",
  "applications": 1,
  "jobUrl": "https://www.reed.co.uk/jobs/backend-developer-python-java-ruby-remote/46589185"
}]

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getAllJobs Api service", () => {
  test('response from getAllJobs', () => {
    const resp = {data : jobs};
    
    mockedAxios.get.mockImplementation(() => Promise.resolve(resp)); 

    return getAllJobs().then((data: Job[]) => expect(data).toEqual(jobs));
  })
})
