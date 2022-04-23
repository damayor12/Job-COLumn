'use strict';

// Imports
const db = require('./index');

async function getAllJobs () {
  return await db.Jobs.findAll();
}

module.exports = { getAllJobs };