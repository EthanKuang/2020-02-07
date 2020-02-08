<template>
  <div>
    <router-link to="/notice">
      <el-menu-item index="3">
        <i class="el-icon-news"></i>
        <span slot="title">公告</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NoticeItem'
}
</script>
