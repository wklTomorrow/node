// const express = require('express')
// const app = express()
// import app from './api/get'
const { app } = require('./api/get')


var server = app.listen(3000, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})