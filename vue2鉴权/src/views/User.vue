<template>
 <div>
   <div v-limits="['superAdmin','admin','member']">普通用户模块</div>
   <div v-limits="['superAdmin','admin']">当权限为管理员和超级管理员才显示</div>
 </div>
</template>

<script>
export default {
  name: "aA",
  created() {
  }
}
</script>

<style scoped>

</style>