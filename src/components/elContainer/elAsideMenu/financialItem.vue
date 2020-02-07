<template>
  <div>
    <el-menu-item index="4">
      <i class="el-icon-s-data"></i>
      <span slot="title">
        <router-link to="/financialState">财务报表</router-link>
      </span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'FinancialItem'
}
</script>
