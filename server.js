// Requiring npm packages
const express = require('express');
require('dotenv').config();

// Setting up PORT if .env exists or default to 3030
const PORT = process.env.PORT || 3030;

// Express app and middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Requiring routes
require('./routes/html-routes')(app);

app.listen(PORT, function() {
  console.log('Hello and welcome to project 2 express server');
  console.log('I am running on port', PORT);
});
