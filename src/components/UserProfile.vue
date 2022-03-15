<template>
  <el-row>
    <el-col :span="18">
      <h2>Profile</h2>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="18">
      <el-divider/>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col :span="6">
      <label>User id</label>
      <el-input :modelValue="id" disabled/>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col :span="6">
      <label for="name">Name</label>
      <el-input id="name" v-model="name" clearable maxlength="32" show-word-limit/>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col :span="6">
      <label for="desc">Desc</label>
      <el-input id="desc" v-model="desc" :rows="3" type="textarea" placeholder="Show something about you"
                maxlength="128" show-word-limit/>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col>
      <el-button type="success">Update</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    id: String
  },
  data() {
    return {
      name: 'vissurra',
      desc: 'Something about you'
    }
  }
}
</script>

<style scoped>
label {
  font-size: 18px;
  font-weight: bold;
}

.item {
  margin-bottom: 20px;
}

.el-divider {
  margin-bottom: 50px;
}
</style>