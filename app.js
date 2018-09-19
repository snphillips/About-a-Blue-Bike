//  express is the library that makes this all possible
const express = require('express');
const pool = require('./db');

//  Invoke express. Henseforth, app = express
const app = express();



pool.connect();
const { DATABASE_URL } = process.env;


const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');


app.use(bodyParser.json());
// app.use(cors({ origin, credentials: true }));
app.use('/', routes);




// app.get('/', (request, response, next) => {
//   pool.query('SELECT * FROM citibike_rides LIMIT 1;', (err, res) => {
//   if (err) return next(err);
//   console.log("bike trips!!!!!!");
//   console.log(res.rows);
//   });
// });

// Error Handler. This must appear after the app.get
app.use((err, req, res, next) => {
  res.json(err);
});


 module.exports = app;
