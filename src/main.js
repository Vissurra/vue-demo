import * as Vue from 'vue'

import App from "@/App";
import {router} from "@/router";
import ElementPlus from 'element-plus'


const app = Vue.createApp(App)
app.use(router)
app.use(ElementPlus, {size: 'normal', zIndex: 3000})

app.mount('#app')
