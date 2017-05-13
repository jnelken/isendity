var express = require('express');
var router = express.Router();
var connection = require('../../db')

router.get('/', function(req, res, next) {
  connection.query('SELECT * from tags', function(err, rows, fields) {
    if (!err) {
      res.json(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

module.exports = router;
