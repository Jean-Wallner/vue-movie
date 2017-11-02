import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//components
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import Sidebar from './components/Sidebar.vue'
import Category from './components/Category.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        //Home
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
