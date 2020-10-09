const mysql = require('./mysql');
const mySql = require('./mysql')
let value = ''
mySql.connec()
mySql.query('SELECT * from value', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    value = results
  });
mysql.end()

module.exports = {
    value
}