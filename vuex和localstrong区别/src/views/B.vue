<template>
<div>
  <div>{{$store.state.name}}</div>
   渲染列表未{{$store.state.list}}
  <div>{{name}}</div>
</div>
</template>

<script>
export default {
  name: "AB",
  data(){
    return {
      name:window.localStorage.getItem("name")
    }
  }
}
</script>

<style scoped>

</style>