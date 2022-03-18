<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <global-nav></global-nav>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import GlobalNav from "@/components/GlobalNav";

export default {
  name: "App",
  components: {GlobalNav}
}
</script>

<style scoped>
</style>
