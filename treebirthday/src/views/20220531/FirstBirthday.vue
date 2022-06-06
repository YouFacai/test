<template>
  <div id="FirstBirthday">
    <van-nav-bar
        title="2022/6/5"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--  主题内容  -->
    <div class="theme">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(data,index) in swiperList"
               :key="index"
          >
            <img class="swiper-slide-img" :src="data"/>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

        <!-- Add Arrows -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <canvas id="canvas-cut"></canvas>
    </div>
    <van-uploader style="display: flex;justify-content: center;position: relative;bottom: 100px"
                  :after-read="afterRead">
      <van-button icon="plus" type="primary">上传文件</van-button>
    </van-uploader>
  </div>
</template>
<script>
export default {
  name: "FirstBirthday",
  data() {
    return {
      cur: 0,
      swiperList: [
        'http://img.yzlhaha.top/imgs/tree/2.png',
        'http://img.yzlhaha.top/imgs/tree/1.png',
        'http://img.yzlhaha.top/imgs/tree/3.png',
        'http://img.yzlhaha.top/imgs/tree/4.png',
        'http://img.yzlhaha.top/imgs/tree/5.png',
        'http://img.yzlhaha.top/imgs/tree/6.png']
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.f();
    this.initSwiper()
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    afterRead(file) {
      this.addImg(file).then(() => {
        window.swiper.slideTo(this.swiperList.length-1)
      })
    },
    addImg(file) {
      let oldLen = this.swiperList.length
      return new Promise((resolve) => {
        this.swiperList.push(URL.createObjectURL(file.file))

        const deep = () => {
          let timer = setTimeout(() => {
            if (oldLen !== this.swiperList.length) {
              clearTimeout(timer)
              window.swiper.update()
              resolve()
            } else {
              deep()
            }
          }, 0)
        }

        deep()
      })
    },
    f() {
      let stepx = 200, stepy = 200;
      // canvas大小
      let canvasx, canvasy;
      var canvas = document.getElementById('canvas-cut');
      var img = new Image();
      var cut = canvas.getContext('2d');

      const init = (SRC = 'http://img.yzlhaha.top/imgs/tree/2.png') => {
        let artworkImg = document.getElementsByClassName('swiper-slide-img')[this.cur]
        console.log(artworkImg.offsetWidth, artworkImg.offsetHeight)
        img.src = SRC;
        // //处理toDataURL遇跨域资源导致的报错
        img.crossorigin = "anonymous"
        img.onload = function () {
          //这个比例要调整
          canvasx = artworkImg.offsetWidth * 4
          canvasy = artworkImg.offsetHeight * 5
          canvas.width = canvasx
          canvas.height = canvasy
          cuttingImg(stepx, stepy)
        };
      }

      window._init = init

      //  图片切割
      function cuttingImg(stepx, stepy) {
        // 每一张图片的宽高
        let stepW = Math.floor(canvasx / stepx), stepH = Math.floor(canvasy / stepy)
        for (let i = 0; i <= stepy + 2000; i++) {
          for (let j = 0; j <= stepx + 2000; j++) {
            let x = j * stepW
            let y = i * stepH
            cut.drawImage(img, x, y, stepW, stepH, x, y, stepW - 1, stepH - 1)
          }
        }
        // colorReversal()
      }

      // //颜色反转
      // function colorReversal() {
      //   let myImage = cut.getImageData(0, 0, canvasx * 2, canvasy * 2);
      //   console.log(myImage)
      //   for (var i = 0; i < myImage.data.length; i += 4) {
      //     var myRed = myImage.data[i];
      //     var myGreen = myImage.data[i + 1];
      //     var myBlue = myImage.data[i + 2];
      //     let myGray = parseInt((myRed + myGreen + myBlue) / 3);
      //     myImage.data[i] = myGray;
      //     myImage.data[i + 1] = myGray;
      //     myImage.data[i + 2] = myGray;
      //   }
      //   cut.putImageData(myImage, 0, 0)
      // }

      init()
    },
    initSwiper() {
      // eslint-disable-next-line no-undef
      window.swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onSlideChangeEnd: (swiper) => {
          window._init(this.swiperList[swiper.activeIndex])
        }
      });
    }
  }
}
</script>

<style scoped>
#FirstBirthday {
  width: 100%;
  height: 100vh;
}

#canvas-cut {
  width: 100%;
}

.theme-img {
  width: 100%;
}

.swiper-container {
  margin: 0;
}

.swiper-slide {
  background-position: center;
  width: 100vw;
  background-size: cover;
  background-size: 100% 100%;
}

.swiper-slide img {
  width: 100vw;
}
</style>