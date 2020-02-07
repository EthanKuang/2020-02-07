<template>
  <div>
    <el-menu-item index="5">
      <i class="el-icon-money"></i>
      <span slot="title">
        <router-link to="/salaryManage">薪资管理</router-link>
      </span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'SalaryItem'
}
</script>
