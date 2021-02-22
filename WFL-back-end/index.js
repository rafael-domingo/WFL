// 'use strict';

// Imports
const express = require('express');
const app = express();
const yelpAPI = require('./yelp');

// Middleware
app.use('/', yelpAPI);

// Port 5000
app.listen(5000);