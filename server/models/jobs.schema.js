'use strict';

function createJobsTable (connection, DataTypes) {
  const Jobs = connection.define('Jobs', {
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
  }, { timestamps: false });
  return Jobs;
}

module.exports = createJobsTable;