<template>
  <div>
    <div @click="$store.commit('setName','sjl')">
      修改name为宋jl
    </div>
    <div @click="update">
      修改locastrongName为我已经改动
    </div>
    <div @click="$store.commit('setlist')">
      修改list
    </div>
  </div>
</template>

<script>
export default {
  name: "AB",
  methods:{
    update(){
      window.localStorage.setItem('name','我已经改动')
    }
  }
}
</script>

<style scoped>

</style>