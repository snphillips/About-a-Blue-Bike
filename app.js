const http = require('http');

// Database connections
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: true,
});

pool.connect();
const { DATABASE_URL } = process.env;


//  express is the library that makes this all possible
const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./routes');
const cors = require('cors');

//  Invoke express. Henseforth, app = express
const app = express();

app.use(bodyParser.json());
// app.use(cors({ origin, credentials: true }));
// app.use('/', routes);







// console.logs a bunch of rows of data
pool.query('SELECT * FROM citibike_rides LIMIT 1;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  pool.end();
});




 module.exports = app;
