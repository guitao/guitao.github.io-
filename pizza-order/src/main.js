import Vue from 'vue'
import VueRouter from 'vue-router' // 引入路由
import App from './App.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin'
import About from './components/about/About.vue'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'





//使用路由
Vue.use(VueRouter);

//配置路由
const routes = [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin },
    {
        path: '/about',
        name: 'aboutLink',
        component: About,
        redirect: '/history',
        children: [{
                path: '/about/contact',
                name: 'contactLink',
                component: Contact,
                redirect: '/contact/personname',
                children: [
                    { path: '/contact/phone', name: 'phoneLink', component: Phone },
                    { path: '/contact/personname', name: 'personnameLink', component: PersonName }

                ]
            },
            { path: '/delivery', name: 'deliveryLink', component: Delivery },
            { path: '/history', name: 'historyLink', component: History },
            { path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide }

        ]
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
]

//把routes放入router
const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router, //将router放入实例中
    render: h => h(App)
})