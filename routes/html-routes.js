const router = require("../controllers/holiday_controller");
const holidayORM =require("../models/holiday")

module.exports = function(router) {

  router.get('/', function(req, res) {
  holidayORM.selectAll(function(data) {
  res.render('index', {holiday:data});
    });

    router.post('/', function(req, res) {
      holidayORM.insertOne(req.body.holiday, function(result) {
        console.log(result);
        res.redirect('submit');
      });
    });
  })};