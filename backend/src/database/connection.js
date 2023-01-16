const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './../../.env') });

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

module.exports = connection;
