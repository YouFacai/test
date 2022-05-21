const express = require("express");
const app = express();
const data = require("./Data/1.js")

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/getList", (req, res) => {
    res.send(data)
})

app.listen(3000, () => {
    console.log("3000端口已开启")
})