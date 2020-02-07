<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>部门管理</span>
      </template>
      <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-add-location"></i>
            <router-link to="/divisionAdd">新增部门</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-guide"></i>
            <router-link to="/divisionManage">管理部门</router-link>
          </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'DivisionItem'
}
</script>
