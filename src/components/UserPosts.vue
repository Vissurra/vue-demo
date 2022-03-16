<template>
  <el-row>
    <el-col :span="14">
      <h2>Posts</h2>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="14">
      <el-divider/>
    </el-col>
  </el-row>
  <el-row class="item">
    <el-col :span="12">
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
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
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
      ]
    }
  },
  methods: {
    handleEdit: (index, row) => {
      console.log('Edit', index, row)
    },
    handleDelete: (index, row) => {
      console.log('Delete', index, row)
    }
  }
}
</script>

<style scoped>
.el-divider {
  margin-bottom: 30px;
}
</style>