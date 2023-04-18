import { Router } from 'express';
import { authUser, getUsers } from './auth.controller.js';

const router = Router();

router.route('/user/auth').post(getUsers);

export default router;