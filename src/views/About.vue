<template>
  <el-row>
    <el-col :span="12" :offset="3">
      <HelloWorld msg="About"/>
      <img alt="Vue logo" src="../assets/logo.png">
    </el-col>
  </el-row>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
</style>
