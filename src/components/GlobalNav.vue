<template>
  <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
  >
    <router-link to="/">
      <el-menu-item index="1">Home</el-menu-item>
    </router-link>
    <el-sub-menu index="2">
      <template #title>Users</template>
      <router-link to="/user/1">
        <el-menu-item index="2-1">User1</el-menu-item>
      </router-link>
      <router-link to="/user/2">
        <el-menu-item index="2-2">User2</el-menu-item>
      </router-link>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <router-link to="/about">
      <el-menu-item index="4">About</el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: 'GlobalNav',
  data() {
    return {
      url: '../assets/logo.png',
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect: (key, keyPath) => {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>