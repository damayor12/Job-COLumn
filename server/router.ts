import Router from 'express';
import getAllJobs from './controllers'

const router = Router();
router.get('/jobs/:location', getAllJobs);

export default router;
