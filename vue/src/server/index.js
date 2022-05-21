const express = require("express");
const app = express();

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/login", (req, res) => {
    /**
     * 分别对对应 超级管理员
     *          管理员
     *          普通用户
     * */
    let user1 = {
        authority: "superAdmin",
    };
    let user2 = {
        authority: "admin",
    };
    let user3 = {
        authority: "member",
    }
    let {id} = req.query;
    if (id == 1) {
        res.send(user1)
    } else if (id == 2) {
        res.send(user2)
    } else if (id == 3) {
        res.send(user3)
    }
})

app.listen(3000, () => {
    console.log("3000端口已开启")
})