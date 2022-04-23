'use strict';

// Imports
const Jobs = require('../models/jobs');

async function getAllJobs (_, res) {
  try {
    const allJobs = await Jobs.getAllJobs();
    res.status(200);
    res.send(allJobs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = { getAllJobs };