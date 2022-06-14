// nodejs服务器
const express = require("express");

// 创建express实例和vue实例
const app = express();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requestd-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
})

app.get('/test', (req, res) => {

    res.send("返回成功")
})

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log("渲染服务器启动成功");
});
