<template>
  <div>
    <router-link to="/financialState">
      <el-menu-item index="4">
        <i class="el-icon-s-data"></i>
        <span slot="title">财务报表</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FinancialItem'
}
</script>
