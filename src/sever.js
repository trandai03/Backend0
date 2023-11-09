require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const path = require('path')
const hostname = process.env.HOST_NAME
const webRouter = require('./routers/web')
const connection = require('./config/database')
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true})); 

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// config 

const configViewEngine = require('./config/viewEngine');
configViewEngine(app)

app.use('/',webRouter)


// test connection 


// simple query
// connection.query(
//   'SELECT * FROM Users u',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//   }
// );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})