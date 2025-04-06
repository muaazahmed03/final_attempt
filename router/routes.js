import express from 'express'
import { signupController } from '../controller/signupController.js';
import { loginController } from '../controller/loginController.js';
import { tokenVerification } from '../middleware/middleware.js';
import { getallusers } from '../controller/getAllUserController.js';

const router = express.Router();

router.route('/api/signup').post(signupController)
router.route('/api/login').post(loginController)
router.route('/api/getallusers').get(tokenVerification, getallusers)

export default router;