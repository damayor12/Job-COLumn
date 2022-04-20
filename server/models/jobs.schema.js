'use strict';

function createJobsTable (connection, DataTypes) {
  const Jobs = connection.define('Jobs', {
    // This is the Schema
    jobId: DataTypes.INTEGER,
    employerId: DataTypes.INTEGER,
    employerName: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    locationName: DataTypes.STRING,
    minimumSalary: DataTypes.INTEGER,
    maximumSalary: DataTypes.INTEGER,
    expirationDate: DataTypes.STRING,
    date: DataTypes.STRING,
    jobDescription: DataTypes.STRING,
    jobUrl: DataTypes.STRING,
  });
  return Jobs;
}

module.exports = createJobsTable;