var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('users');
  usercollection.find({}, {}, function(e, userlist) {
    res.render('userlist', {
      'userlist': userlist,
    });
  });
});

module.exports = router;
