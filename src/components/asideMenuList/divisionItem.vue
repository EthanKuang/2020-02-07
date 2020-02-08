<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>部门管理</span>
      </template>
      <el-menu-item-group>
        <router-link to="/divisionAdd">
          <el-menu-item index="1-1">
            <i class="el-icon-add-location"></i>
            <span slot="title">新增部门</span>
          </el-menu-item>
        </router-link>
        <router-link to="/divisionManage">
          <el-menu-item index="1-2">
            <i class="el-icon-guide"></i>
            <span slot="title">管理部门</span>
          </el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'DivisionItem'
}
</script>
