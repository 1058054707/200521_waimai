import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

/* 声明使用插件 */
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/Search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/Order',
            component: Order,
            meta: {
                showFooter: true
            }
        }, {
            path: '/Profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        }, {
            path: '/login',
            component: Login
        }
    ]
})