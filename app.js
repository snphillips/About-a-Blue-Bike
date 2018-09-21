//  express is the library that makes this all possible
const express = require('express');



//  Invoke express. Henseforth, app = express
const app = express();





// pool.connect();

const { DATABASE_URL } = process.env;


const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

// Test to see if this is doing anything
// const origin = process.env.MODE === 'production' ?
//   'https://bluebikes.herokuapp.com/' :
//   'http://localhost:4000';
// app.use(cors({ origin, credentials: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', routes);


// Error Handler.
app.use((err, req, res, next) => {
  res.json(err);
});


 module.exports = app;
