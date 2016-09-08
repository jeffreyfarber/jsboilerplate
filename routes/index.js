var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    bodytext: 'Hello Full-Stack Class, you\'ve successfully loaded your first webpage!'
  });
});

module.exports = router;
