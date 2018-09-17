const http = require('http');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();


const PORT = process.env.PORT || 5000;
const { DATABASE_URL } = process.env;


client.query('SELECT * FROM citibike_rides LIMIT 100;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});


server.listen(PORT, () => {
  console.log(`Server running on ${PORT}. Let's ride!`);
});
