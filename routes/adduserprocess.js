var express = require('express');
var router = express.Router();

/* GET add user process. */
router.get('', function(req, res, next) {
  var db = req.db;
  var collection = db.get('users');

  console.log('TODO: add a user!')
  res.send('We added the user (just kdiding, not yet!)!')
});

module.exports = router;
