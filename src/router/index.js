import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'

const routes = [
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: HomeView
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // },

    // my stuff
    {
        path: '/',
        name: 'Index',
        redirect: { name: "Blogs" }
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/blog/add',
        name: 'BlogEdit',
        component: BlogEdit
    },
    {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },
    {
        path: '/blogs/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router