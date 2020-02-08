<template>
  <div>
    <el-submenu index="2">
      <template slot="title">
          <i class="el-icon-user"></i>
          <span>员工管理</span>
      </template>
      <el-menu-item-group>
        <router-link to="/staffAdd">
          <el-menu-item index="2-1">
            <i class="el-icon-plus"></i>
            <span slot="title">新增员工</span>
          </el-menu-item>
        </router-link>
        <router-link to="/staffManage">
          <el-menu-item index="2-2">
            <i class="el-icon-refresh-right"></i>
            <span slot="title">管理员工</span>
          </el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'StaffItem'
}
</script>
