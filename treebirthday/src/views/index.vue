<template>
  <div style="justify-content: center;display: flex;align-items: center;margin-top: 30%">
    <div>
      <div style="text-align: center">👇👇👇👇戳我👇👇👇👇</div>
      <div @click="test" style="margin-top: 20px">尤前途祝雨🌳<B>2022/6/5</B> 生日快乐🌹🌹🌹</div>
      <div style="text-align: center;margin-top: 10px">在一起：{{ renderTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHome",
  data() {
    return {
      renderTime: ''
    }
  },
  computed: {},
  mounted() {
    setInterval(() => {
      this.timeFn("2022/03/15 12:00:00")
    }, 1000)
  },
  methods: {
    test() {
      this.$router.push('/FirstBirthday')
    },
    timeFn(d1) {//di作为一个变量传进来
      //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
      var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
      var dateEnd = new Date();//获取当前时间
      var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
      var leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
      //计算相差秒数
      var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000)
      // console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
      this.renderTime = dayDiff + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 "
      // console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
      // console.log(dateDiff + "时间差的毫秒数", dayDiff + "计算出相差天数", leave1 + "计算天数后剩余的毫秒数"
      //     , hours + "计算出小时数", minutes + "计算相差分钟数", seconds + "计算相差秒数");
    }
  }
}
</script>

<style scoped>

</style>