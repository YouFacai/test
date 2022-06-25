<template>
  <div id="app">
    <el-upload
        class="upload-demo"
        drag
        action="/"
        :before-upload="beforeUpload"
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div style="width: 360px">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="progress"></el-progress>
    </div>
    <el-button v-if="progress!==0 && progress!== 100" @click="incident">{{ this.abort ? "中断" : "继续" }}</el-button>
  </div>
</template>

<style>

</style>
<script>
import Qs from 'qs'
import axios from 'axios'
import {filetoBuffer} from "@/utils/index.js"
import SparkMD5 from 'spark-md5'

export default {
  data() {
    return {
      // 完成了几个
      total: 0,
      // 一共几个
      count: 0,
      // 全部的切片
      allchunk: [],
      // 全部的http请求
      allRequest: [],
      abort: true
    }
  },
  computed: {
    progress() {
      if (!this.total && !this.count) return 0;
      let target = Math.ceil((this.total / this.count) * 100)
      return target > 100 ? 100 : target
    }
  },
  mounted() {
  },
  methods: {
    // 中断 or 继续开始
    incident() {
      if (!this.abort) {
        this.abort = true
        this.requestSend()
        return;
      }
      this.abort = false
    },
    // 获取图片信息把file转为ArrayBuffer
    async beforeUpload(file) {
      this.total = 0;
      let allArrayBuffer = await filetoBuffer(file).then(res => res);
      this.splitChunks(allArrayBuffer, file)
      return false
    },
    // 进行文件切片
    splitChunks(allArrayBuffer, file) {
      let spark = new SparkMD5(),
          allchunk = [];
      spark.append(allArrayBuffer);
      let hash = spark.end(),
          cur = 0,
          allSize = file.size,
          sleep = 1024 * 10;
      this.count = Math.ceil(allSize / sleep)
      for (let i = 0; i < this.count; i++) {
        let item = {
          chunk: file.slice(cur, cur + sleep),
          fileName: `${hash}_${i}.${file.name.split('.')[1]}`
        }
        cur += sleep
        allchunk.push(item)
      }
      this.hash = hash;
      this.allchunk = allchunk
      this.requestSend();
    },
    requestSend() {
      let allRequest = []
      // 根据切片生成需要发送的http请求
      this.allchunk.forEach((item, index) => {
        let fn = () => {
          let fromData = new FormData();
          fromData.append("file", item.chunk);
          fromData.append("filename", item.fileName);
          return axios.post("/upload_chunk", fromData).then(() => {
            this.total += 1
            this.allchunk.splice(index, 1)
          })
        }
        allRequest.push(fn)
      })
      this.allRequest = allRequest

      let i = 0;
      const send = async () => {
        // 加一个判断是否中断
        if (!this.abort) {
          return;
        }
        if (i >= this.allRequest.length) {
          axios.post('/upload_merge', Qs.stringify({
            HASH: this.hash,
            count: i
          }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(() => {
            this.allRequest = [];
            this.allchunk = [];
          })
          return;
        }
        await this.allRequest[i]();
        i++;
        send()
      }
      send();
    }
  }
}
</script>
