<template>
  <div>
    <router-link to="/hello">
      <el-menu-item index="0">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloItem'
}
</script>
