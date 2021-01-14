var connection = require("./connection.js");

// object of functions to preform db queries
let orm = {
  //select all record from holidays table
  selectAll: function(response) {
    let queryString = "SELECT * FROM holidays";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      response(data);
    });
  },
  //insert into the holidays table fields 
  insertOne: function(holiday, response) {
    let queryString = "INSERT INTO holidays(cityname,hotel,restaurant,review) VALUES (?,?,?,?)";
    connection.query(queryString, [holiday], function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  //update field for the refrenced id
  updateOne: function(id, response) {
    let queryString = "UPDATE holidays SET ? WHERE ?";
    connection.query(queryString, { id:id }, function(err, data) {
      if (err) throw err;
      response(data);
    });
  },
  //delete record form holidays table where refrenced id
  deleteOne: function(id, response) {
    let queryString = "DELETE FROM holidays WHERE ?";
    connection.query(queryString, [{ id:id }], function(err, data) {
      if (err) throw err;
      response(data);
    });
  }

};

module.exports = orm;