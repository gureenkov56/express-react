import { Router } from 'express';
import asyncHandler from 'express-async-handler'
import { getUserEmail } from './user.controller.js';

const router = Router();

// get user email
router.route('/email').get(asyncHandler(getUserEmail));

export default router;