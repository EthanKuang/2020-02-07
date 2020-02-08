<template>
  <div>
    <router-link to="/salaryManage">
      <el-menu-item index="5">
        <i class="el-icon-money"></i>
        <span slot="title">薪资管理</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SalaryItem'
}
</script>
