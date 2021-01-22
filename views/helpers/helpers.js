const moment = require('moment');
moment().format();

// Convert Sequelize timestamp to formatted date
module.exports = {
  dateFormat: (date) => {
    return moment(date, 'x').format('lll');
  }
};