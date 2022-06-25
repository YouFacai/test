const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
//请求服务器的地址
        proxy: 'http://127.0.0.1:8888'
    }
})
