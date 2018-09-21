//  express is the library that makes this all possible
const express = require('express');

// npm package to allow cross origin resource sharing
// var cors = require('cors')

//  Invoke express. Henseforth, app = express
const app = express();

const { DATABASE_URL } = process.env;

//  body-parser is an npm plugin for Express that we need to use in order
//  to be able to capture data coming via a form. Express used to have this
//  functionality built-in but in order to achieve easier maintenance
//  body-parser has been removed from the core of Express. body-parse parses
//  incoming request bodies in a middleware before your handlers, available
//  under the req.body property. (makes your forms work)
const bodyParser = require('body-parser');

// All your routes are in there
const routes = require('./routes');

// **********************************
// app.uses
// **********************************
// app.use(cors())
app.use(bodyParser.json());
app.use('/', routes);

// Error Handler
app.use((err, req, res, next) => {
  res.json(err);
  res.status(500).send('Oh no a 500 error. Maybe you have a flat tire?')
});

app.use((req, res, next) => {
  res.status(404).send(`Oh no a 404 error. I can't find that.`)
})

 module.exports = app;
// Test to see if this is doing anything - remove when satisfied
// const origin = process.env.MODE === 'production' ?
//   'https://bluebikes.herokuapp.com/' :
//   'http://localhost:4000';
// app.use(cors({ origin, credentials: true }));

// - remove when satisfied
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
