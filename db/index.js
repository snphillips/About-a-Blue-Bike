// const { Pool } = require("pg");
//  let connectionString, pool


// Heroku instructions: to use this module to connect to the database specified in your DATABASE_URL environment variable. Add this near the top:
const { Pool } = require('pg');
let pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});




// production
if (process.env.NODE_ENV === 'production'){
  console.log("production taco NODE_ENV:", process.env.NODE_ENV)
  connectionString = process.env.DATABASE_URL
  pool = new Pool(connectionString);


} else {

  // local development
  console.log("development taco NODE_ENV:", process.env.NODE_ENV)
  let{ user, host, database, password, port} = require("../secrets/db_configuration");
  pool = new Pool({ user, host, database, password, port });

};

module.exports = pool;






