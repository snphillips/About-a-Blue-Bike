// This file contains all the connection strings to connect
// to the database server


 module.exports = process.env.DATABASE_URL || {
  host:     process.env.DB_HOST || 'localhost',
  port:     process.env.DB_PORT || 5432,
  database:  'bluebikedb',
  user: "snphillips",
};
