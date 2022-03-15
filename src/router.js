import About from "@/About";
import User from "@/components/MyUser";
import UserHome from "@/components/UserHome";
import UserProfile from "@/components/UserProfile";
import UserPosts from "@/components/UserPosts";
import * as VueRouter from "vue-router";

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


export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})