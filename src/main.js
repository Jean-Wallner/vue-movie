import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueLocalStorage from 'vue-ls';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//components
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import Sidebar from './components/Sidebar.vue'
import Category from './components/Category.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.use(VueLocalStorage, {});

const router = new VueRouter({
    mode: 'history',
    routes: [{
        //Home
        name: 'home',
        path: '/',
        components: {
            default: Home,
            sidebar: Sidebar
        }
    },{
        //Movie details
        name: 'movie',
        path: '/movies/:id',
        components: {
            default: Movie,
            sidebar: Sidebar
        }
    },{
        //Display Movies by Categories
        name: 'category',
        path: '/category/:id',
        components: {
            default: Category,
            sidebar: Sidebar
        }
    },{
        //Display Movies by Categories
        name: 'login',
        path: '/login',
        components: {
            default: Login
        }
    },{
        path: '*',
        redirect: '/'
    }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
