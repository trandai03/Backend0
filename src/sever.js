require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const path = require('path')
const hostname = process.env.HOST_NAME
const webRouter = require('./routers/web')
// config 
const configViewEngine = require('./config/viewEngine');
configViewEngine(app)

app.use('/test',webRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})