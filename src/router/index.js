import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const dynamicImport = name => (
    () => Promise.resolve(require(`_views/${name}.vue`))
)

export default new Router({
    mode: 'history',

    scrollBehavior: () => ({ y: 0 }),

    routes: [
        {
            path: '/products',
            component: dynamicImport('Products')
        },
        {
            path: '*',
            redirect: '/products'
        }
    ]
})
