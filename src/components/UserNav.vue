<template>
  <el-row>
    <el-col :span="14" :offset="4">
      <el-menu default-active="1">
        <router-link :to="'/user/' + id + '/profile'">
          <el-menu-item index="1">
            <el-icon>
              <avatar/>
            </el-icon>
            Profile
          </el-menu-item>
        </router-link>
        <router-link :to="'/user/' + id + '/posts'">
          <el-menu-item index="2">
            <el-icon>
              <list/>
            </el-icon>
            Posts
          </el-menu-item>
        </router-link>
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