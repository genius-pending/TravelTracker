const Holiday = require('../models/Holiday');
const render = require('../controllers/render-html');

module.exports = function (app) {

  app.get('/', (req, res) => {
    render.indexHTML(res);
  });

  app.get('/submit', (req, res) => {
    render.submitHTML(res);
  });

  app.get('/browse', (req, res) => {
    render.submitHTML(res);
  });

  app.get('/review', (req, res) => {
    render.submitHTML(res);
  });

  app.post('/', async (req, res) => {
    try {
      await Holiday.create({
        cityname: 'London',
        review: 'London is a UK capital city.'
      });
      res.sendStatus(200);
    } catch (error) {
      console.log('Error on POST/:', error);
      res.sendStatus(500);
    }
  });
};