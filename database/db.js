var Pool = require('pg').Pool; //import PostgresSQL

// Create Pool

var pool = new Pool({
  host            : 'hostname',
  port            : port,
  user            : 'user for database',
  password        : 'password',
  database        : 'database name',
})

module.exports = pool;
