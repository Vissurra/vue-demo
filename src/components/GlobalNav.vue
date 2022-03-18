<template>
  <el-menu
      :default-active="$route.path"
      mode="horizontal"
      @select="handleSelect"
      router
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Users</template>
      <el-menu-item index="/user/1">User1</el-menu-item>
      <el-menu-item index="/user/2">User2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/info" disabled>Info</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'GlobalNav',
  methods: {
    handleSelect: (key, keyPath) => {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>