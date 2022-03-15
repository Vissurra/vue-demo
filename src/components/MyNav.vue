<template>
  <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Users</template>
      <el-menu-item index="2-1">
        <router-link to="/user/1">User1</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/user/2">User2</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">
      <router-link to="/about">About</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'MyNav',
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