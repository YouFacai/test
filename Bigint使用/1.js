const axios = require("axios")

// 发送给后端请求
function getnum() {
    axios.get("http://127.0.0.1:3000/getNum").then(res => {
        console.log(transitionBigInt(res.data) + 1n)
    })
}

getnum()

// "方法说明": "字符串变成bigint",
// "method": "transitionBigInt",
// "param": "string  99999999999n",
// "return": "一个bigint"
function transitionBigInt(num) {
    return BigInt(num.split("n")[0])
}

