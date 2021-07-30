import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import login from '../components/login.vue'
import menu from '../components/menuCard.vue'

import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                middleware: [
                    guest
                ]
            }
        },

        {
            path: '/menu',
            name: 'menu',
            component: menu,
            meta: {
                middleware: [
                    auth
                ]
            },
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }


    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

export default router