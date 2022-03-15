<template>
  <el-button type="text">
    <router-link to="/">Home</router-link>
  </el-button>
  <el-button type="text">
    <router-link to="/about">About</router-link>
  </el-button>
  <el-button type="text">
    <router-link to="/user/1">User1</router-link>
  </el-button>
</template>

<script>
export default {
  name: "MyNav"
}
</script>

<style scoped>

</style>