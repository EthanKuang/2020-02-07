<template>
  <div>
    <el-menu-item index="3">
      <i class="el-icon-news"></i>
      <span slot="title">
        <router-link to="/notice">公告</router-link>
      </span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'NoticeItem'
}
</script>
