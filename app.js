const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config({ path: `${__dirname}/env/${process.env.NODE_ENV}.env` });

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const routeManager = require('./routes');

const swaggerDoc = require('./documentation');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDoc, { explorer: true }));
app.use('/', routeManager);

// catch 404 and forwarding to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    success: false,
    stack: process.env.NODE_ENV === 'development' ? error.stack : '',
    data: error.data,
  });
});
module.exports = app;
