const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

// const { checkOverload } = require('./helpers/check.connect');

const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./db/init.mongodb');
// checkOverload();

// init routes
app.use('/', require('./routes'));

// handling error

module.exports = app;
