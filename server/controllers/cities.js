'use strict';

// Imports
const Cities = require('../models/cities');

async function getAllCities (_, res) {
  try {
    const allCities = await Cities.getAllCities();
    res.status(200);
    res.send(allCities);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getCity (req, res) {
  try {
    const { id } = req.params;
    const city = await Cities.getCity(id);
    res.status(200);
    res.send(city);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = { getAllCities, getCity };