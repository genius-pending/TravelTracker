let orm = require('../config/orm.js');

// An object that is going to be exported by holiday-controller,js
//calling the functions from the orm.js file
let holidayORM = {
  selectAll: function (response) {
    orm.selectAll(function (data) {
      response(data);
    });
  },
  insertOne: function (cityname, hotel, restaurant, review, response) {
    orm.insertOne(cityname, hotel, restaurant, review, function (data) {
      response(data);
    });
  },
  updateOne: function (id, response) {
    orm.updateOne(id, function (data) {
      response(data);
    });
  },
  deleteOne: function (id, response) {
    orm.deleteOne(id, function (data) {
      response(data);
    });
  }
};

module.exports = holidayORM;