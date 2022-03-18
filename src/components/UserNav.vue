<template>
  <el-row>
    <el-col :span="14" :offset="4">
      <el-menu default-active="/" router>
        <el-menu-item :index="'/user/' + id + '/profile'">
          <el-icon>
            <avatar/>
          </el-icon>
          Profile
        </el-menu-item>
        <el-menu-item :index="'/user/' + id + '/posts'">
          <el-icon>
            <list/>
          </el-icon>
          Posts
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