<template>
  <h3>User Nav</h3>
  <router-link :to="'/user/' + $route.params.id">Go to User</router-link>
  <br>
  <router-link :to="'/user/' + $route.params.id + '/profile'">Go to profile {{ $route.params.id }}</router-link>
  <br>
  <router-link :to="'/user/' + $route.params.id + '/posts'">Go to posts {{ $route.params.id }}</router-link>
</template>

<script>
export default {
  name: "UserNav"
}
</script>

<style scoped>

</style>