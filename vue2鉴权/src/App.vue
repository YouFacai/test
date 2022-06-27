<template>
  <div id="app">
    <router-link tag="div" to="/user">成员入口</router-link>
    <router-link tag="div" to="/Admin">管理员入口</router-link>
    <router-link tag="div" to="/SuperAdmin">超级管理员入口</router-link>
    <div style="margin-top: 20px">
      当前用户的权限状态为 <span style="color: red">{{ authority }}</span>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from "axios"

export default {
  data() {
    return {
      authority: localStorage.getItem('authority')
    }
  },
  created() {
    // let id = 1
    // axios.get(`http://127.0.0.1:3000/login?id=${id}`).then(res => {
    //   this.authority = res.data.authority
    //   localStorage.setItem("authority", res.data.authority)
    // })
  }
}
</script>

<style>

</style>
