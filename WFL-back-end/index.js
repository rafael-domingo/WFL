// 'use strict';

// Imports
const express = require('express');
const app = express();
const yelpAPI = require('./yelp');
const cors = require('cors');

app.use(cors());

// Port 5000
app.listen(5000);

// Middleware
app.use('/api', yelpAPI);
