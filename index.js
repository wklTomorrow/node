const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.all('*', (req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    // // res.header("Access-Control-Allow-Origin", "");
    // res.header("Access-Control-Allow-Credentials", true);
    // res.header("Access-Control-Allow-Headers", "Origin,Content-Type,x-requested-with,X-Custom-Header,token,ticket");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static(path.join(__dirname, 'public')))


// app.get('/', function(res, req) {
//     fs.readFile('../../public/index.html', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         req.end(data)
//         // console.log("异步读取: " + data.toString());
//      });     
// })
app.get('/hello', function(res, req) {
    // req.send('hello world')
    req.send({
        status: true,
        code: 200,
        msg: '新增成功'
    })
})

app.get('/index', function(res, req) {
    req.sendFile(__dirname + '/public/index.html')
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})