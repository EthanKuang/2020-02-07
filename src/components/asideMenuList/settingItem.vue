<template>
  <div>
    <router-link to="/setting">
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SettingItem'
}
</script>
