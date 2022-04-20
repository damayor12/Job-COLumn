'use strict';

// Imports
const db = require('./index');

async function getAllJobs () {
  return await db.Jobs.findAll();
}

async function getJob (id) {
  return await db.Jobs.findOne({where: { id }});
}

module.exports = { getAllJobs, getJob };