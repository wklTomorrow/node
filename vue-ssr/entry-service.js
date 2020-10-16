const createApp = require("./app");

function getData() {
    return new Promise((resolve, reject) => {
        resolve('async data')
    })
}

module.exports = (context) => {
    return new Promise(async (resolve, reject) => {
        let { url } = context
        context.asyncData = await getData()
        context.data = 'data'
        let { app, router } = createApp(context)
        router.push(url)
        router.onReady(() => {
            let matchComponent = router.getMatchedComponents()
            if (!matchComponent.length) {
                return reject('error')
            }
            resolve(app)
        })
    }).catch(err => {
        // console.log(err)
    })
}