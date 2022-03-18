<template>
  <el-row>
    <el-col :span="16">
      <h2>Profile</h2>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16">
      <el-divider/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-form label-position="top" label-width="100px">
        <el-form-item label="User id">
          <template #label>
            <label>User id</label>
          </template>
          <el-input :modelValue="id" disabled/>
        </el-form-item>
        <el-form-item label="Name" la>
          <template #label>
            <label for="name">Name</label>
          </template>
          <el-input id="name" v-model="name" clearable maxlength="32" show-word-limit/>
        </el-form-item>
        <el-form-item label="Activity form">
          <template #label>
            <label for="desc">Desc</label>
          </template>
          <el-input id="desc" v-model="desc" :rows="3" type="textarea" placeholder="Show something about you"
                    maxlength="128" show-word-limit/>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col>
      <el-button type="success" @click="dialogVisible = true">Update</el-button>
    </el-col>
  </el-row>

  <el-dialog v-model="dialogVisible" width="20%">
    <span>Updating profile?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    id: String
  },
  data() {
    return {
      dialogVisible: false,
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
  margin-bottom: 30px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>