<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <my-nav></my-nav>
      </el-header>
      <el-row>
        <el-col :span="18" :offset="3">
          <el-container>
            <el-aside>
              <router-view name="left"></router-view>
            </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import MyNav from "@/components/MyNav";

export default {
  components: {MyNav}
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
