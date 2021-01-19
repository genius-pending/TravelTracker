const Holiday = require('../models/Holiday');

module.exports = {
  indexHTML: async (res) => {
    try {
      // We may not need the follwing line - for now only for testing
      const results = await Holiday.findAll();
      console.log('Holiday database results:', results);
      res.render('index');
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  },
  submitHTML: async (res) => {
    try {
      res.render('submit');
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  },
  browseHTML: async (res) => {
    try {
      const results = await Holiday.findAll({
        raw: true
      });
      res.render('browse', {results});
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  },
  reviewHTML: async (res) => {
    try {
      res.render('review');
    } catch (error) {
      console.log('Error on GET/:', error);
      res.sendStatus(500);
    }
  }
};