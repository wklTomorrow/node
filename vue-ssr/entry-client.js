import createApp from './app'

// 客户端特定引导逻辑……

let { router, app } = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
    app.$mount('#app')
})