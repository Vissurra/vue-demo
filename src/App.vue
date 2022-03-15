<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <my-nav></my-nav>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <router-view name="left"></router-view>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
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
</style>
