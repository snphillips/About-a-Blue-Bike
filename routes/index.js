const { Router } = require('express');
const biketripqueries = require('./biketripqueries');

const router = Router();

// const express = require('express');
// const cors = require('cors');
// const app = require('../app');
// // const app = express();


// app.use(cors());

// Routing middleware: Two parameters:
// 1) the namespace as a string. In this case, simply a /
// 2) bind biketripqueries as routing middleware
router.use('/', biketripqueries);


module.exports = router;
