require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const authRoute = require('./routes/authentication/auth.route');
const homeRoute = require('./routes/user/homepage.route');
const passwordReset = require('./utils/passwordReset');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Custom Middlewares

// API Routes
app.use('/api/v1', authRoute);
app.use('/api/v1', homeRoute);

app.use('/api/v1/password-reset', passwordReset);

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

module.exports = app;
