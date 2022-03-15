import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import ElementPlus from 'element-plus'

import App from './App.vue'
import About from './About.vue'
import User from './components/MyUser.vue'
import UserHome from './components/UserHome.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'

// 1. 定义路由组件.
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {path: '/', component: {template: '<h1>Home</h1>'}},
  {path: '/about', component: About},
  {
    path: '/user/:id',
    component: User,
    props: true,
    children: [
      // 当 /user/:id 匹配成功
      // UserHome 将被渲染到 User 的 <router-view> 内部
      {
        path: '',
        component: UserHome
      },
      // 当 /user/:id/profile 匹配成功
      // UserProfile 将被渲染到 User 的 <router-view> 内部
      {
        path: 'profile',
        component: UserProfile,
        props: true
      },
      // 当 /user/:id/posts 匹配成功
      // UserPosts 将被渲染到 User 的 <router-view> 内部
      {
        path: 'posts',
        components: {
          default: UserPosts,
          post2: UserPosts
        },
        props: true
      }
    ]
  }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(),
  routes, // `routes: routes` 的缩写
})

// 5. 创建并挂载根实例
const app = Vue.createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(ElementPlus, {size: 'small', zIndex: 3000})

app.mount('#app')
