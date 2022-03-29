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

// v-md-editor markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
// v-md-editor markdown end

import axios from 'axios'
import VueAxios from 'vue-axios'

import "./axios.js"
import "./permission"



const app = createApp(App).use(ElementPlus).use(store).use(router)

app.use(VueMarkdownEditor)
app.use(VueAxios, axios)

app.mount('#app')