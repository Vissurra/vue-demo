<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <el-container>
        <el-aside>
          <UserNav></UserNav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
import UserNav from "@/components/UserNav";

export default {
  name: "UserView",
  components: {UserNav}
}
</script>

<style scoped>
.el-aside {
  padding-top: 50px;
}

.el-main {
  padding-top: 50px;
}
</style>