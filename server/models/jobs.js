'use strict';

// Imports
const db = require('./index');

async function getAllJobs () {
  return await db.Jobs.findAll();
}

async function getJob (jobId) {
  return await db.Jobs.findOne({ where: { jobId } });
}

module.exports = { getAllJobs, getJob };