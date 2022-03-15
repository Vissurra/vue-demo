<template>
  <div class="user">
    <h2>User {{ id }}</h2>
    <user-nav></user-nav>
  </div>
  <hr>
  <router-view></router-view>
  <router-view name="post2"></router-view>
</template>

<script>
import UserNav from "@/components/UserNav";

export default {
  name: "MyUser",
  props: {
    id: String
  },
  components: {
    UserNav
  }
}
</script>

<style scoped>

</style>