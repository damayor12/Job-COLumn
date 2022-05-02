'use strict';
import { Request, Response } from 'express';
// Imports
//const Jobs = require('../models/jobs');

import Jobs from '../models/jobs';

async function getAllJobs (_: Request, res: Response) {
  try {
    const allJobs = await Jobs.getAllJobs();
    res.status(200);
    res.send(allJobs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

// module.exports = { getAllJobs };
export default  getAllJobs ;