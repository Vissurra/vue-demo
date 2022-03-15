import About from "@/views/About";
import MyUser from "@/views/MyUser";
import UserProfile from "@/components/UserProfile";
import UserPosts from "@/components/UserPosts";
import * as VueRouter from "vue-router";
import UserNav from "@/components/UserNav";

const routes = [
  {
    path: '/', component: {template: '<h1>Home</h1>'}
  },
  {
    path: '/about', component: About
  },
  {
    path: '/user/:id',
    components: {
      default: MyUser,
      left: UserNav
    },
    props: true,
    children: [
      {
        path: 'profile',
        alias: [''],
        component: UserProfile,
        props: true
      },
      {
        path: 'posts',
        component: UserPosts,
        props: true
      }
    ]
  }
]


export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
})