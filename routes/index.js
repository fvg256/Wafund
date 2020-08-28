var express = require('express');
var router = express.Router();
var register = require('./register/register');
var login = require('./login/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/register', register);
router.use('/login', login);

module.exports = router;
