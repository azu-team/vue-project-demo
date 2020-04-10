import Vue from 'vue'
import Router from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const _import = require('./util.import.' + process.env.NODE_ENV)
import routes from './generateRouters'
Vue.use(Router)
const routerArr = [{
        path: '/',
        redirect: '/pageHead/page/home'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/indexModules/login.vue')
    },
    {
        path: '/pageHead',
        name: 'pageHead',
        component: () => import('@/components/indexModules/pageHead.vue'),
        redirect: 'pageHead/page/home',
        children: [{
            path: 'page',
            name: 'page',
            component: () => import('@/components/indexModules/indexPage.vue'),
            children: [
                ...routes
            ]
        }, ]
    },
]
const router = new Router({
    // mode: 'history',
    routes: routerArr,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact'
})



/**
 * 路由拦截
 * 权限验证
 */
let allowPath = ['/login']
router.beforeEach(async (to, from, next) => {
    // 进度条
    NProgress.start()
    next();
    // if (sessionStorage.token || allowPath.includes(to.path)) next()
    // else next({
    //   path: '/login'
    // });
})
router.afterEach(to => {
    // 进度条
    NProgress.done()
})
export default router
export {routerArr}