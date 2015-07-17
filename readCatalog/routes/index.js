var express = require('express');
var router = express.Router();

var userData = require('../collection/userdata');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { "userData": userData });
});

module.exports = router;
