// let orm = require('../config/orm.js');

// An object that is going to be exported by holiday-controller,js
//calling the functions from the orm.js file
// let holidayORM = {
//   selectAll: function (response) {
//     orm.selectAll(function (data) {
//       response(data);
//     });
//   },
//   insertOne: function (cityname, hotel, restaurant, review, picture, response) {
//     orm.insertOne(cityname, hotel, restaurant, review, picture, function (data) {
//       response(data);
//     });
//   },
//   updateOne: function (id, response) {
//     orm.updateOne(id, function (data) {
//       response(data);
//     });
//   },
//   deleteOne: function (id, response) {
//     orm.deleteOne(id, function (data) {
//       response(data);
//     });
//   }
// };

// module.exports = holidayORM;

//const { v4: uuid } = require('uuid');
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
});

module.exports = Holiday;