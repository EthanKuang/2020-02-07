<template>
  <el-container>
    <el-header>
      <header-menu></header-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <aside-menu></aside-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideMenuComponent from './components/elContainer/asideMenu'
import HeaderMenuComponent from './components/elContainer/headerMenu'
export default {
  name: 'App',
  components: {
    AsideMenu: AsideMenuComponent,
    HeaderMenu: HeaderMenuComponent
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
  }
  .el-aside {
    background-color: #D3DCE6;
    height: 546px;
  }
  .el-main {
    background-color: #E9EEF3;
  }
  .el-col {
    width: 200px;
  }
</style>
