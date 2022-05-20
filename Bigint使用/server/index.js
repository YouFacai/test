// nodejs服务器
const express = require("express");
// 创建express实例
const app = express();

app.all("*",(req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/getNum", (req, res) => {
    let num = "9007199254740999n"
    res.send(num)
})

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log("3000渲染服务器启动成功");
});
