const express = require('express');

const router = express.Router();
const { loginUser } = require('../../controllers/authentication/login.controller');
const { signupUser } = require('../../controllers/authentication/signup.controller');

// POST ROUTES

// @routes /api/v1/signup
// @desc   Signup
router.post('/signup', signupUser);

// @routes /api/vi/login
// @desc   Login
router.post('/login', loginUser);

module.exports = router;
