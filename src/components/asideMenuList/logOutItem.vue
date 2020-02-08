<template>
  <div>
    <router-link to="/logOut">
      <el-menu-item index="0">
        <i class="el-icon-close"></i>
        <span slot="title">退出</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LogOutItem'
}
</script>
