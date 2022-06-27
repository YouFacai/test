<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <audio id="audio" autoplay src="./assets/audio/1.mp3"></audio>
  </div>

</template>

<script>
export default {
  mounted() {
    this.init()
  },
  methods: {
    init() {
      document.getElementById('audio').play()
    }
  }
}
</script>
<style>
</style>
