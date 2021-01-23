// Requiring npm packages
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();
// Database
const db = require('./config/db');

// Express app and middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//uese method override for forum PUT and DELETE queries
app.use(methodOverride('_method'));

//set engine and default for handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//serve static content from the public directory
app.use(express.static(__dirname + '/public'));

require('./routes/html-routes')(app);
// Setting up PORT if .env exists or default to 3030
const PORT = process.env.PORT || 3030;

// iffe for connection to db and server
(async () => {
  try {
    await db.authenticate();
    console.log('Database connected...');
    await db.sync();
    console.log('Models sync...');
    app.listen(PORT);
    console.log('Server running on port', PORT);
  } catch (error) {
    console.log('Error while starting app:', error);
    process.exit(1);
  }
})();