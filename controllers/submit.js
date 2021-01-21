const Holiday = require('../models/Holiday');

module.exports = {
  submitReview: async (data) => {
    try {
      await Holiday.create(data);
      return true;
    } catch (error) {
      console.log('Error on POST/:', error);
      return false;
    }
  },
};
