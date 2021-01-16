
let orm = require('../config/orm.js');



const Sequelize = require('sequelize');
const db = require('../config/db');

const Holiday = db.define('holiday', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  cityname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hotel: {
    type: Sequelize.STRING
  },
  restaurant: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  }
  // createdAt: {
  //   allowNull: false,
  //   defaultValue: Sequelize.fn('now'),
  //   type: Sequelize.DATE
  // },
  // updatedAt: {
  //   allowNull: false,
  //   defaultValue: Sequelize.fn('now'),
  //   type: Sequelize.DATE
  // }
});

module.exports = Holiday;