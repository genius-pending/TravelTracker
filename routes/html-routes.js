// const db = require('../config/db');
const Holiday = require('../models/Holiday');

module.exports = function (app) {

  app.get('/', async (req, res) => {
    try {
      const results = await Holiday.findAll();
      console.log(results);
      res.sendStatus(200);
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  });

  app.post('/', async (req, res) => {
    try {
      await Holiday.create({
        cityname: "London",
        review: "London is a UK capital city."
      });
      res.sendStatus(200);
    } catch (error) {
      console.log('Error on POST/:', error);
      res.sendStatus(500);
    }
  })

};