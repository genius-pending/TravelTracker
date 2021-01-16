// Requiring npm packages
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();

// Setting up PORT if .env exists or default to 3030
const PORT = process.env.PORT || 3030;

// Express app and middleware
const app = express();

// Database
const db = require('./config/db');
// Test db
(async () => {
  try {
    await db.authenticate();
    console.log('Database connected...');
  } catch (error) {
    console.log('Error while connecting to database:', error);
  }
})();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Requiring routes
require('./routes/html-routes')(app);

//uese method override for forum PUT and DELETE queries
app.use(methodOverride('_method'));

//set engine and default for handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}) );
app.set('view engine', 'handlebars');

//set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//serve static content from the public directory
app.use(express.static(__dirname + '/public'));

//require holiday-controller,js for the routes
let routes = require('./controllers/holiday_controller.js');

app.use('/', routes);
app.use('/:id', routes);

app.listen(PORT, function() {
  console.log('Hello and welcome to project 2 express server');
  console.log('I am running on port', PORT);
});
