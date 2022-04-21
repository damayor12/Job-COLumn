'use strict';

// Imports
const db = require('./index');

async function getAllCities () {
  return await db.Cities.findAll();
}

async function getCity (name) {
  return await db.Cities.findOne({where: { name }});
}

module.exports = { getAllCities, getCity };