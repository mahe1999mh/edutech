const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/auth")
const userLogin = require("./routes/login")
require("dotenv").config();


//middleware
connectDB();
app.use(bodyParser.json());
app.use(cors());

//env variables
const port = process.env.PORT;


app.use(userRoutes);
app.use(userLogin);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
