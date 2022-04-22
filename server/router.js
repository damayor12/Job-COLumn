// Package imports
const { Router } = require('express');

const router = Router();

// Jobs
const { getAllJobs, getJob } = require('./controllers/jobs');
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJob);

// TODO delete cities data
// Cities
const { getAllCities, getCity } = require('./controllers/cities');
router.get('/cities', getAllCities);
router.get('/cities/:name', getCity);

module.exports = router;