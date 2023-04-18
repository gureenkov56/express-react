import { Router } from 'express';
import { authUser, getUsers } from './auth.controller.js';
import asyncHandler from 'express-async-handler'

const router = Router();

router.route('/user/auth').post(asyncHandler(authUser));

export default router;