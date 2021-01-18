const render = require('../controllers/render-html');
const submit = require('../controllers/submit');

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

  app.post('/submit', (req) => {
    submit.submitReview(req.body);
  });
};