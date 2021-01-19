const Holiday = require('../models/Holiday');

module.exports = {
  submitReview: async (data, res) => {
    try {
      await Holiday.create(data);
      res.send(data);
    } catch (error) {
      console.log('Error on POST/:', error);
      res.sendStatus(500);
    }
  },
};
