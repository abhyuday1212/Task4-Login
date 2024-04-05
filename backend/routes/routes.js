import express from "express";

import { signupUser, loginUser, checkUsername, logoutUser } from "../controller/user_controller.js";

import { authenticateToken, createNewToken } from "../controller/jwt-controller.js";


const router = express.Router();

router.post('/signup', signupUser);
router.post('/username', checkUsername);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

export default router;
