const { Router } = require('express');
const biketripqueries = require('./biketripqueries');
const router = Router();

// Routing middleware: Two parameters:
// 1) the namespace as a string. In this case, simply a /
// 2) bind biketripqueries as routing middleware
router.use('/', biketripqueries);

module.exports = router;
