<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

import {reactive, ref, toRef, toRefs} from "vue"


// 1

let {name} = toRefs(reactive({
  name:"yzl",
  age:12
}))
name = ref(name)
setTimeout((params) => {
  name = "312321"
  console.log(name)
},1000)
// 2
// const fn = (params) => {
//   const data = reactive({
//     name: "yzl",
//     age: 12
//   })
//
//   setTimeout((params) => {
//     data.name = 'sjl'
//   },1000)
//   return {
//     ...toRefs(data)
//   }
//
// }
//
// const {name,age} = fn()



</script>

<template>
  <div>
    nihao1
    {{name}}
  </div>
</template>

<style scoped>

</style>
