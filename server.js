'use strict';
var express    = require('express'),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    config     = require('./config'),
    path       = require('path'),
    bodyParser = require('body-parser'),
    app        = express(),
    apiCtrl    = require('./controllers/apiCtrl')(app, express);

mongoose
  .connect(config.database)
  .connection.on('open', () => {
    console.log('Connected to DB');
  });
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
  });

app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
  })
  .use(express.static('public'))
  .use('/api', apiCtrl) 

app.listen(config.port);
console.log(`Server running on port ${config.port}`);
