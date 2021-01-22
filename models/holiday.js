
const Sequelize = require('sequelize');
const db = require('../config/db');

const Holiday = db.define('holiday', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cityname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  review: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  hotel: {
    type: Sequelize.STRING
  },
  hotelrev: {
    type: Sequelize.STRING
  },
  restaurant: {
    type: Sequelize.STRING
  },
  restaurantrev: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  }
});
module.exports = Holiday;