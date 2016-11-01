var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('uitests', {
  });
});

module.exports = router;
