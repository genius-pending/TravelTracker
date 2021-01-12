const express = require('express');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3030;



app.listen(PORT, function() {
  console.log('Hello and welcome to project 2 express server');
  console.log('I am running on port', PORT);
});
