const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: true,
});

pool.connect();


//  express is the library that makes this all possible
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

//  Invoke express. Henseforth, app = express
const app = express();

app.use(bodyParser.json());
// app.use(cors({ origin, credentials: true }));
app.use('/', routes);


const PORT = process.env.PORT || 4000;
const { DATABASE_URL } = process.env;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World");
});


// pool.query('SELECT * FROM citibike_rides LIMIT 5;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   pool.end();
// });





server.listen(PORT, () => {
  console.log(`Server running on ${PORT}. Let's ride!`);
  console.log(`Database URL is: ${process.env.DATABASE_URL}.`)
});
