const mysql = require("mysql");
const { promisify } = require('util');

const connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
    password: "TYracq19#KDc$7",
    database: "businessDB",
  });

  const queryPromise = promisify(connection.query.bind(connection))

  module.exports = { connection, queryPromise }