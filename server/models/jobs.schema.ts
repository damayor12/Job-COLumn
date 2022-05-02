'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';

interface JobsInterface {
  jobId: number;
  employerId: number;
  employerName: string;
  employerProfileId: number;
  employerProfileName: string;
  jobTitle: string;
  locationName: string;
  minimumSalary: number;
  maximumSalary: number;
  currency: string;
  expirationDate: string;
  date: string;
  jobDescription: string;
  applications: number;
  jobUrl: string;
}

interface JobsInstance extends Model<JobsInterface>, JobsInterface {}

function createJobsTable(connection: Sequelize) {
  const Jobs = connection.define<JobsInstance>(
    'Jobs',
    {
      jobId: DataTypes.INTEGER,
      employerId: DataTypes.INTEGER,
      employerName: DataTypes.STRING,
      employerProfileId: DataTypes.INTEGER,
      employerProfileName: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
      locationName: DataTypes.STRING,
      minimumSalary: DataTypes.FLOAT,
      maximumSalary: DataTypes.FLOAT,
      currency: DataTypes.STRING,
      expirationDate: DataTypes.STRING,
      date: DataTypes.STRING,
      jobDescription: DataTypes.TEXT,
      applications: DataTypes.INTEGER,
      jobUrl: DataTypes.STRING,
    },
    { timestamps: false },
  );
  return Jobs;
}

 module.exports = createJobsTable; /// require dsfdf 
// export default createJobsTable; import fdfsdf from 'fd..'
