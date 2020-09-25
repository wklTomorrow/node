const express = require('express')
const app = express()
const APP_URL = '/api'
const menu = require('./menu')
const fs = require('fs')
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
// app.use(APP_URL, express.static(APP_URL));
app.get(`${APP_URL}/first`, function (req, res) {
    // res.send('Hello World');
    let query = req.query.id
    let obj = {
        data: menu,
        msg: '成功',
        status: 200
    }
    res.send(obj)
})

app.get(`${APP_URL}/second`, function (req, res) {
    let obj = {
        name: 'hi',
        value: 'hhh',
        id: req.query,
        route: req.route.path
    }
    res.send(obj)
})

app.get(`${APP_URL}/getUsers`, function (req, res) {
    fs.readFile('./api/value.json', 'utf8', function(err, data) {
        let obj = {
            data: JSON.parse(data),
            msg: '成功',
            status: 200
        }
        res.send(obj)
    })
})

app.delete(`${APP_URL}/getUsers`, function (req, res) {
    fs.readFile('./api/value.json', 'utf8', function(err, data) {
        let id = req.query.id
        let datas = JSON.parse(data)
        delete datas['user' + id]
        let obj = {
            data: datas,
            msg: '成功',
            status: 200
        }
        res.send(obj)
    })
})

app.post(`${APP_URL}/getUsers`, function (req, res) {
    fs.readFile('./api/value.json', 'utf8', function(err, data) {
        let datas = JSON.parse(data)
        let params = req.body
        datas['user' + 10] = params
        let obj = {
            data: datas,
            msg: '成功',
            status: 200
        }
        res.send(obj)
    })
})

app.get(`${APP_URL}/getFile`, function (req, res) {
    res.sendFile(__dirname + '/test.html')
})
module.exports = {
    app
}