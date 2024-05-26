const express = require('express');
const connectDB = require('./config/db');
const app = express()
require("dotenv").config();

//middleware
connectDB();

//env variables
const port = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})