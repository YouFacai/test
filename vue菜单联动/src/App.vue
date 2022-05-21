<template>
  <div class="scrollbar">
    <div ref="wrapperLeft" class="scrollbar-wrapper wrapperLeft">
      <div class="content-left">
        <div @click="clickLeftMenu(index,$event)" :class="currentLeftNum === index 
        ?'content-left-item focus':'content-left-item'"
             v-for="(item,index) in
        menu"
             :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div ref="wrapperRight" class="scrollbar-wrapper wrapperRight">
      <div ref="contentRight" class="content-right">
        <div v-for="(item,index) in menu" :key="index">
          <div class="content-right-title">{{ item.name }}</div>
          <div class="content-right-item" v-for="(item2,index2) in item.list" :key="index2">
            <div class="item-right-img">
              <img :src="item2.img"/>
            </div>
            <div class="item-right-content">
              <div class="item-right-title">{{ item2.name }}</div>
              <div class="item-right-capacity">{{ item2.parameter.capacity }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import axios from 'axios'

BScroll.use(ScrollBar);

export default {
  data() {
    return {
      //右侧滚动式是否需要左侧的高度计算
      needCompute:true,
      // 大标题的DOM
      allRightTitle: [],
      //左侧菜单栏的焦点
      currentLeftNum: 0,
      //记录标题的高度
      titleListTop: [],
      menu:[]
    }
  },
  created() {
    axios.get("http://127.0.0.1:3000/getList").then(res=>{
      this.menu = res.data.menu
    })
  },
  mounted() {
    // 必须在mounted上挂在 BScroll
    setTimeout(() => {
      this.initBscroll();
      this.getEventTitleTop(this.menu)
    },0)
  },
  methods: {
    // 初始化滚动栏
    initBscroll() {
      // 左滚滚动菜单
      this.scrollLeft = new BScroll(this.$refs.wrapperLeft, {
        scrollY: true,
        scrollbar: true,
        // 这样不会阻止 @click原生事件
        click: true
      });

      //  右滚动菜单
      this.scrollRight = new BScroll(this.$refs.wrapperRight, {
        scrollY: true,
        /*
        * probeType : 决定是否派发 scroll 事件
        *   1. probeType 为 0，在任何时候都不派发 scroll 事件，
            2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
            3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
            4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
        * */
        probeType: 3,
        scrollbar: {
          fade: true
        }
      })
      this.scrollRight.on('scroll', (position) => this.scrollContentRight(position))
      this.scrollRight.on('scrollEnd', () => this.needCompute = true)
    },
    /*
    * 计算每一个标题再右侧滚动的高度，然后添加到 titleListTop 中
    * */
    // eslint-disable-next-line no-unused-vars
    getEventTitleTop(scrollData) {
      this.allRightTitle = document.querySelectorAll(".content-right-title")
      Array.from(this.allRightTitle).forEach(titleNode => {
        //  把数据标题的高度添加到 (标题高度数组中)
        this.titleListTop.push(titleNode.offsetTop)
      })
      // 不加这一跳 h2就会是 undefined 左边彩带你就永远不会让最后一个元素获得焦点
      this.titleListTop.push(Infinity)
    },
    //  监听右侧菜单的滚动事件
    scrollContentRight(position) {
      //  如果是点击左侧菜单就不触发 高度定位了
      if (this.needCompute) {
        let scrollTop = Math.abs(position.y);
        for (let i = 0; i <= this.titleListTop.length; i++) {
          let h1 = this.titleListTop[i]
          let h2 = this.titleListTop[i + 1]
          if (scrollTop >= h1 && scrollTop < h2) {
            //左侧菜单栏的焦点
            this.currentLeftNum = i
          }
        }
      }
    },
    //  点击左侧菜单(右侧菜单定位高度)
    clickLeftMenu(index) {
      this.currentLeftNum = index
      this.needCompute = false
      this.scrollRight.scrollToElement(this.allRightTitle[index], 700)
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

.scrollbar {
  display: flex;
  height: 100%;
}

.scrollbar-wrapper {
  position: relative;
  height: 100vh;
  padding: 0 10px;
  overflow: hidden;
}


/*
* 左边的样式
*/
.wrapperLeft {
  flex: 1;
  padding: 0;
}

/**
  普通样式
*/
.content-left-item {
  height: 40px;
  background: #f2f2f2;
  justify-content: center;
  align-items: center;
  display: flex;
}

/**
  左侧菜单获得焦点的样式
*/
.focus {
  color: red;
}

/*
右边的样式
**/
.wrapperRight {
  flex: 2.5;
}

.content-right-title {
  height: 30px;
}

.content-right-item {
  height: 120px;
  display: flex;
}

.item-right-img {
  flex: 2;
  height: 100px;
}

.item-right-img img {
  height: 100%;
}

.item-right-content {
  flex: 3;
}

.item-right-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
}

.item-right-capacity {
  font-size: 14px;
  color: #909399;
}
</style>