const express = require('express')
const app = express()
const fs = require('fs')
const connection = require('./mysql')
var mysql = require('mysql');  
const APP_URL = '/api'
var sqls = mysql.createConnection(connection);
sqls.connect()
var bodyParser = require('body-parser')   
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    // res.header("Access-Control-Allow-Origin", "");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type,x-requested-with,X-Custom-Header,token,ticket");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({ extended: false }))    

// parse application/json  
app.use(bodyParser.json())  
app.get(`${APP_URL}/getNames`, function(res, req) {
    var  sql = 'SELECT * FROM value';
    sqls.query(sql, function(err, val) {
        if (err) {
            console.log('err')
            return
        }
        req.send(val)
    })
    // connection.end(res)
    // console.log(res)
})
app.delete(`${APP_URL}/getNames`, function(res, req) {
    let id = res.query.id
    var  sql = `DELETE FROM value where id=${id}`;
    sqls.query(sql, function(err, val) {
        if (err) {
            console.log('err')
            return
        }
        req.send({
            status: true,
            code: 200,
            msg: '删除成功'
        })
    })
    // connection.end(res)
    // console.log(res)
})
app.post(`${APP_URL}/getNames`, function(res, req) {
    var  sql = 'INSERT INTO value(name,age,time) VALUES(?,?,?)';
    let body = res.body
    let { name, age, time } = body
    if (body) {
        sqls.query(sql, [name, age, new Date(time)], function(err, val) {
            if (err) {
                console.log('err', err)
                return
            }
            req.send({
                status: true,
                code: 200,
                msg: '新增成功'
            })
        })
    }
    // connection.end(res)
    // console.log(res)
})
// app.use(APP_URL, express.static(APP_URL));
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})