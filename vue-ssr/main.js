/* 
    Vue + 服务端渲染

*/
const express = require('express');
const app = express();
const path = require('path')
// const vueApps = require("./app")
const apps = require("./entry-service");
// const Vue = require('vue');
// const vueServeRender = require('vue-server-renderer').createRenderer()
const vueServeRender = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8')
})

app.get('*', async function(res, req) {
    // const vueApp = new Vue({
    //     data: {
    //         message: 'hello world'
    //     },
    //     template: `<h1>{{message}}</h1>`
    // })
    // const vueApp = vueApps({})
    let {url} = res
    let vueApp = await apps({url})
    if (vueApp) {
        req.status(200)
        // req.setHeader("Content-type", 'text/html;charset-utf-8');
        vueServeRender.renderToString(vueApp).then(html => {
            req.send(html)
        }).catch(err => {
            console.log(err)
        })
    }
    // req.send('hello ssr')
})

app.listen('5000', () => {
    console.log('服务已开启')
})