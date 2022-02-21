import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld')
    },{
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home')
    },{
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login')
    }]
})