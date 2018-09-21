//  express is the library that makes this all possible
const express = require('express');

// npm package to allow cross origin resource sharing
var cors = require('cors')

//  Invoke express. Henseforth, app = express
const app = express();

const { DATABASE_URL } = process.env;

//  body-parser is an npm plugin for Express that we need to use in order
//  to be able to capture data coming via a form. Express used to have this
//  functionality built-in but in order to achieve easier maintenance
//  body-parser has been removed from the core of Express.
const bodyParser = require('body-parser');

// All your routes are in there
const routes = require('./routes');

app.use(cors())

app.use(bodyParser.json());

// Test to see if this is doing anything - remove when satisfied
// const origin = process.env.MODE === 'production' ?
//   'https://bluebikes.herokuapp.com/' :
//   'http://localhost:4000';
// app.use(cors({ origin, credentials: true }));


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.use('/', routes);


// Error Handler.
app.use((err, req, res, next) => {
  res.json(err);
});

console.log("sanity check 01- remove app.use cors")
 module.exports = app;
