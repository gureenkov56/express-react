import { Router } from 'express';
import { authUser } from './auth.controller.js';

const router = Router();

router.route('/user/auth').post(authUser);

export default router;