// Package imports
const { Router } = require('express');
const router = Router();
const { getAllJobs } = require('./controllers');
router.get('/jobs', getAllJobs);
module.exports = router;
