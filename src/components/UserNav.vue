<template>
  <el-row>
    <el-col :span="14" :offset="4">
      <el-menu default-active="1">
        <el-menu-item index="1">
          <el-icon>
            <avatar/>
          </el-icon>
          <router-link :to="'/user/' + id + '/profile'">Profile</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><list /></el-icon>
          <router-link :to="'/user/' + id + '/posts'">Posts</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {Avatar, List} from "@element-plus/icons-vue";

export default {
  name: "UserNav",
  props: {
    id: String
  },
  components: {Avatar, List},
}
</script>

<style scoped>
</style>