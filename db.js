var mysql      = require('mysql');
var conf       = require('./conf.js');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : conf.db.user,
  password : conf.db.pass,
  database : 'isendity'
});
// var connection = mysql.createConnection({
//   host     : 'hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user     : 'x55oi5an4p865jz1',
//   password : 'a3bcbvkfz71lf40d',
//   database : 'isendity'
// });

connection.connect();

connection.query('SELECT * from tags', function(err, rows, fields) {
  if (!err)
    console.log('queries good');
  else
    console.log('Error while performing Query.', err);
});

module.exports = connection
