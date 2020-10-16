const Router = require('vue-router');
const Vue = require('vue');

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: {
                template: `<h1>this is home pages</h1>`
            },
            name: 'home'
        },
        {
            path: '/about',
            component: {
                template: `<h1>this is home about</h1>`
            },
            name: 'about'
        }
    ]
})

module.exports = router