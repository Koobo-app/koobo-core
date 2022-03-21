const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const { homePage } = require('../../controllers/users/home.controller');

// GET ROUTE

// @routes /api/v1/welcome
// @desc   Home Page
router.get('/welcome', auth, homePage);

module.exports = router;
