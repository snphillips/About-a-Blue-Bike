// const { Pool } = require("pg");
//  let connectionString, pool


// Heroku instructions: to use this module to connect to the database specified in your DATABASE_URL environment variable. Add this near the top:
const { Pool } = require('pg');
let pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});




// // Production
// if (process.env.NODE_ENV == 'production'){
//   console.log("NODE_ENV?:", process.env.NODE_ENV)
//   connectionString = process.env.DATABASE_URL;
//   pool = new Pool(connectionString);


// } else {

//   // Local Development
//   console.log("NODE_ENV?:", process.env.NODE_ENV)
//   let{ user, host, database, password, port} = require("../secrets/db_configuration");
//   pool = new Pool({ user, host, database, password, port });

// };

// // Development
// if (process.env.NODE_ENV == 'development'){
//   console.log("NODE_ENV?:", process.env.NODE_ENV)
//   let{ user, host, database, password, port} = require("../secrets/db_configuration");
//   pool = new Pool({ user, host, database, password, port });


// } else {

//   // Production
//   console.log("NODE_ENV?:", process.env.NODE_ENV)
//   connectionString = process.env.DATABASE_URL;
//   pool = new Pool(connectionString);

// };
// Development
if (process.env.MODE == 'development'){
  console.log("MODE?:", process.env.MODE)
  let{ user, host, database, password, port} = require("../secrets/db_configuration");
  pool = new Pool({ user, host, database, password, port });


} else {

  // Production
  console.log("MODE?:", process.env.MODE)
  connectionString = process.env.DATABASE_URL;
  pool = new Pool(connectionString);

};

module.exports = pool;






