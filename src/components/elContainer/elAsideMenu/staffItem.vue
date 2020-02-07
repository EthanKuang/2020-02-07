<template>
  <div>
    <el-submenu index="2">
      <template slot="title">
          <i class="el-icon-user"></i>
          <span>员工管理</span>
      </template>
      <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-plus"></i>
            <router-link to="/staffAdd">新增员工</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-refresh-right"></i>
            <router-link to="/staffManage">管理员工</router-link>
          </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'StaffItem'
}
</script>
