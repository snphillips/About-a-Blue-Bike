//  express is the library that makes this all possible
const express = require('express');

//  Invoke express. Henseforth, app = express
const app = express();

// npm cors package to allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors')
app.use(cors())



const { DATABASE_URL } = process.env;


const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());

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

 console.log("sanity check 01")

 module.exports = app;
