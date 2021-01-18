const Holiday = require('../models/Holiday');

module.exports = {
  submitReview: async (data) => {
    try {
      await Holiday.create(data);
      res.sendStatus(200);
    } catch (error) {
      console.log('Error on POST/:', error);
      res.sendStatus(500);
    }
  }
};