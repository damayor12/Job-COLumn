'use strict';

// Imports
const db = require('./index');

async function getAllCities () {
  return await db.Jobs.findAll();
}

async function getCity (id) {
  return await db.Jobs.findOne({where: { id }});
}

module.exports = { getAllCities, getCity };