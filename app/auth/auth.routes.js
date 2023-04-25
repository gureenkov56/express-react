import { Router } from 'express';
import { getUsers, loginUser, regUser } from './auth.controller.js';
import asyncHandler from 'express-async-handler'

const router = Router();
// get users list
router.route('/users').get(asyncHandler(getUsers));

// login user
router.route('/user/login').post(asyncHandler(loginUser));

// reg new user
router.route('/user/reg').post(asyncHandler(regUser))

export default router;