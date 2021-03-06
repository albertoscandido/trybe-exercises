const mysql = require('mysql2/promise');

require("dotenv").config();

const connection = mysql.createPool({
  host: 'localhost',
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'mvc_example'});

module.exports = connection;