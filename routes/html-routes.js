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
=======
    render.reviewHTML(res);
>>>>>>> main
  });

  app.post('/submit/review', (req, res) => {
    console.log("Submit post working")
   // submit.submitReview(req.body, res);
  });
};
