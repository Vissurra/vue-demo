<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-link :to="'/user/' + $route.params.id">Go to User</router-link>
    <br>
    <router-link :to="'/user/' + $route.params.id + '/profile'">Go to profile {{ $route.params.id }}</router-link>
    <br>
    <router-link :to="'/user/' + $route.params.id + '/posts'">Go to posts {{ $route.params.id }}</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "User"
}
</script>

<style scoped>

</style>