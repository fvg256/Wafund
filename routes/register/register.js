var express= require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : 'rootpassword',
    database :'test_db'
});

connection.connect();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../../public/register.html'));
});


module.exports = router;