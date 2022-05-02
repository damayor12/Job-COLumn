'use strict';

// Imports
// const db = require('./index');

import db from './index';

async function getAllJobs () {
  console.log('DATABASE: ',db);
  return await db.Jobs.findAll();
}

//module.exports = { getAllJobs };
export default { getAllJobs };