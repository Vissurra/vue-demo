import * as Vue from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import {router} from "@/router";


const app = Vue.createApp(App)
app.use(router)
app.use(ElementPlus, {size: 'small', zIndex: 3000})

app.mount('#app')
