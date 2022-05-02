'use strict';

// Imports
// const db = require('./index');
import db from './index';

async function getAllCities () {
  return await db.Cities.findAll();
}

async function getCity (name: string) {
  return await db.Cities.findOne({where: { name }});
}

export default { getAllCities, getCity };