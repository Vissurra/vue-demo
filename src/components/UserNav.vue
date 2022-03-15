<template>
  <el-row>
    <el-col :span="14" :offset="4">
      <el-menu default-active="1">
        <el-menu-item index="1">
          <el-icon>
            <document/>
          </el-icon>
          <router-link :to="'/user/' + id + '/profile'">Profile</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <router-link :to="'/user/' + id + '/posts'">Posts</router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {Document, Menu as IconMenu} from "@element-plus/icons-vue";

export default {
  name: "UserNav",
  props: {
    id: String
  },
  components: {Document, IconMenu},
}
</script>

<style scoped>
</style>