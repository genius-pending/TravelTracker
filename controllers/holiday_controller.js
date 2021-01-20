let express = require('express');
let holidayORM = require('../models/Holiday.js');


let router = express.Router();
//create routers and export them

//select all holidays from the db and render them
router.get('/', function(req, res) {
  holidayORM.selectAll(function(data) {
    res.render('index', {holiday:data});
  });
});

//post a new holiday to the db
router.post('/', function(req, res) {
  holidayORM.insertOne(req.body.holiday, function(result) {
    console.log(result);
    res.redirect('/');
  });


//update a holiday's status
router.put('/:id', function(req,res) {
  holidayORM.updateOne(req.params.id, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

//delete a holiday from the database
router.delete('/:id', function(req,res) {
  holidayORM.deleteOne(req.params.id, function(result) {
    console.log(result);
    res.redirect('/');
  });
});

module.exports = router;

