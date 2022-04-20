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

async function getJob (req, res) {
  try {
    const { id } = req.params;
    const job = await Jobs.getJob(id);
    res.status(200);
    res.send(job);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = { getAllJobs, getJob };