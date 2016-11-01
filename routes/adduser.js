var express = require('express');
var router = express.Router();

/* GET add user form. */
router.get('/', function(req, res, next) {
  console.log('this is from the server!')
  
  res.render('form', {
    title: 'Add User',
  });
});

module.exports = router;
