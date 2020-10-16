const Vue = require("vue");
const Route = require("./router")

const app = (context) => {
    const router = Route
    const app = new Vue({
        router,
        data: {
            msg: 'hello world',
            data1: context.asyncData,
            data2: context.data
        },
        template: `
            <div id='app'>
                <h1>{{msg}}</h1>
                <h1>{{data1}}</h1>
                <h1>{{data2}}</h1>
                <ul>
                    <li>
                        <router-link to="/">home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">about</router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        `
    })
    return {
        router,
        app
    }
}

module.exports = app