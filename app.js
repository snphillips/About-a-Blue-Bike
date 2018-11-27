
//  express is the library that makes this all possible
const express = require('express');

// npm package to allow cross origin resource sharing
const cors = require('cors')

//  Invoke express. Henseforth, app = express
const app = express();

const { DATABASE_URL } = process.env;

//  body-parser is an npm plugin to be able to capture data coming via a form.
//  body-parse parses incoming request bodies in a middleware before your handlers,
//  available under the req.body property. (TLDR: makes your forms work)
const bodyParser = require('body-parser');

// All your routes are in there
const routes = require('./routes');

// **********************************
// app.uses
// **********************************
app.use(cors())
app.use(bodyParser.json());
app.use('/', routes);

// Error Handlers
app.use((err, req, res, next) => {
  res.json(err);
  res.status(500).send('Oh no a 500 error. Maybe you have a flat tire?')
});

app.use((req, res, next) => {
  res.status(404).send(`Oh no a 404 error. I can't find that.`)
})

 module.exports = app;
