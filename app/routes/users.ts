import express from 'express';
import { userLogin } from '../controllers/users';
import wrapper from '../helpers/wrapper';

const router = express.Router();

router.get('/login', wrapper(userLogin));

export default router;
