import Home from "@/views/Home";
import About from "@/views/About";
import User from "@/views/User";
import UserProfile from "@/components/UserProfile";
import UserPosts from "@/components/UserPosts";
import * as VueRouter from "vue-router";

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/about', component: About
  },
  {
    path: '/user/:id',
    component: User,
    props: true,
    children: [
      {
        path: 'profile',
        props: true,
        component: UserProfile,
      },
      {
        path: 'posts',
        component: UserPosts,
      }
    ]
  }
]


export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})