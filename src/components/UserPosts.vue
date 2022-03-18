<template>
  <el-row>
    <el-col :span="16">
      <h2>Posts</h2>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16">
      <el-divider/>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col :span="16">
      <el-table :data="posts" stripe style="width: 100%">
        <el-table-column type="index" width="100"/>
        <el-table-column prop="title" label="Title" sortable width="180"/>
        <el-table-column prop="insertTime" label="Date" sortable width="180"/>
        <el-table-column prop="desc" label="Desc"/>
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Type to search"/>
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
  <!--  编辑弹框-->
  <el-dialog v-model="editDialogTableVisible" title="Edit" width="600px" @close="closeEdit">
    <el-form :model="editingPostValue" label-width="140px">
      <el-form-item label="Title">
        <el-col :span="18">
          <el-input v-model="editingPostValue.title" disabled/>
        </el-col>
      </el-form-item>
      <el-form-item label="Date">
        <el-col :span="8">
          <el-date-picker v-model="editingPostValue.insertTime" type="date" disabled/>
        </el-col>
      </el-form-item>
      <el-form-item label="Desc">
        <el-col :span="18">
          <el-input v-model="editingPostValue.desc"/>
        </el-col>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editDialogTableVisible = false">Cancel</el-button>
        <el-button type="primary" @click="editItem">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 删除弹框 -->
  <el-dialog v-model="deleteDialogTableVisible" title="Delete" width="600px">
    <span>Try to delete item?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteDialogTableVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteItem">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "UserPosts",
  data() {
    return {
      search: "",
      posts: [
        {
          title: "foo",
          insertTime: '2022-01-01',
          desc: "something short"
        },
        {
          title: "bar",
          insertTime: '2022-01-02'
        },
        {
          title: "baz",
          insertTime: '2022-01-04'
        }
      ],
      // 编辑
      editDialogTableVisible: false,
      editingPost: {},
      editingPostValue: {},
      // 删除
      deleteDialogTableVisible: false,
      deletingPost: {}
    }
  },
  methods: {
    handleEdit(row) {
      console.log('Edit', row)
      this.editingPost = row
      this.editingPostValue = JSON.parse(JSON.stringify(row))
      this.editDialogTableVisible = true
    },
    handleDelete(row) {
      console.log('Edit', row)
      this.deleteDialogTableVisible = true
      this.deletingPost = row
    },
    closeEdit() {
      console.log("Close")
      this.editingPostValue = {}
    },
    editItem() {
      console.log("Submitted", this.editingPost, JSON.parse(JSON.stringify(this.editingPostValue)))
      this.editDialogTableVisible = false
      this.editingPost.desc = this.editingPostValue.desc
    },
    deleteItem() {
      console.log("Deleted", this.deletingPost)
      this.deleteDialogTableVisible = false
      const idx = this.posts.indexOf(this.deletingPost)
      if (idx > -1) {
        this.posts.splice(idx, 1)
      }
    }
  }
}
</script>

<style scoped>
.el-divider {
  margin-bottom: 30px;
}
</style>