import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Element from 'element-ui'
// import "element-ui/lib/theme-chalk/index.css"
// App.use(Element)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// App.use(ElementPlus)

import axios from 'axios'
import VueAxios from 'vue-axios'

import "./axios.js"




const app = createApp(App).use(ElementPlus).use(store).use(router)
    // app.config.globalProperties.axios = axios
app.use(VueAxios, axios)

app.mount('#app')