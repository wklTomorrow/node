const connect = {
    host     : 'localhost',       
    user     : 'root',              
    password : '1234',       
    port: '3306',                   
    database: 'test' 
}


module.exports = connect

// var mysql  = require('mysql');  
 
// var connection = mysql.createConnection({     
//   host     : 'localhost',       
//   user     : 'root',              
//   password : '1234',       
//   port: '3306',                   
//   database: 'test' 
// }); 

// connection.connect()
// // connection.end()

// module.exports = connection


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
// connection.query('SELECT * from value', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });
// connection.query('INSERT INTO value(name,age,time) VALUES(?,?,?)', ['wangs', 20, new Date()], function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });
// connection.query('UPDATE value SET age = ?,time = ? WHERE name = ?', ['100', new Date(), 'wang'], function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });
// connection.query('DELETE FROM value where name="wang"', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//   });