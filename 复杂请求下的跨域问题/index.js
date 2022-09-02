const express = require('express'),
    app = express();

app.use((req,res,next) => {
    /*
    	设置谁可以访问
    	缺点: @1 不安全对所有人都开放
    		 @2  不可用携带资源凭证了
    */
    console.log(req)
    res.header('Access-Control-Allow-Credentials', 'true') //当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Credentials，并且值为“true”  代表是否向页面暴露cookie
    // 指定允许的跨域请求字段。
    res.header(
        'Access-Control-Allow-Headers',
        'token,Content-Type,Content-Length, Authorization, Accept,X-Requested-With,domain,zdy' //当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Headers，并且值为不能为“*”，需要具体配置  代表允许上传的请求头字段
    )
    // 指定允许的跨域请求的来源。填写星号（*）表示全部域名；您也可以填写完整域名，例如http://www.aliyun.com。
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8090') //当客户端跨域并需要传递cookie时，需要设置Access-Control-Allow-Origin，并且值为不能为“*”，需要具体配置
    // 指定允许的跨域请求方法。可同时设置多个方法，多个方法用英文逗号（,）分隔。
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')

    /*
    	复杂跨域请求  客户端发送真正的请求之前，会先发送一个试探性请求OPTIONS：验证一下当前客户端和服务器端是否可以正常的通信...
    */
    // req.method === 'OPTIONS'?res.send('ok'):next();
    next();
})

app.get("/getlist",function (req,res){
    res.send('跑通');
})

// app.post("/getkey",function (req,res){
//     req.header("Content-Type", "application/json");
//     // res.header("Content-Type", "application/json");
//     res.send('跑通');
// })

app.listen(8888,() => {
    console.log('8888服务启动成功')
});
