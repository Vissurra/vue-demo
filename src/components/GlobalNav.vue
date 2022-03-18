<template>
  <el-menu
      :default-active="$route.path"
      mode="horizontal"
      @select="handleSelect"
      router
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-sub-menu index="/user">
      <template #title>Users</template>
      <el-menu-item index="/user/1/profile">User1</el-menu-item>
      <el-menu-item index="/user/2/profile">User2</el-menu-item>
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
      console.log('Select', key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>