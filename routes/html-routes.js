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
    render.browseHTML(res);
  });

  app.get('/review', (req, res) => {
    render.reviewHTML(res);
  });

  // Post request - need to confirm with Andy
  app.post('/submit', async (req, res) => {
    const saved = await submit.submitReview(req.body);
    if (saved === false) {
      res.sendStatus(500);
    }
    res.json({});
  });
};
