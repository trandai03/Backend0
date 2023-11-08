require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const path = require('path')
const hostname = process.env.HOST_NAME
const webRouter = require('./routers/web')
const mysql = require('mysql2');
app.use(express.json());
// config 
const configViewEngine = require('./config/viewEngine');
configViewEngine(app)

app.use('/',webRouter)

// test connection 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
});

// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})