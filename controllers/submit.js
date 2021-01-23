const Holiday = require('../models/holiday');

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
