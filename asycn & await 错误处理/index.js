// 方法一
// (async (params) => {
//     function lala() {
//         // return Promise.resolve("成功")
//         return Promise.reject("失败")
//     }
//
//     let data = await lala().then(res=>res).catch(err=>err)
//     console.log(data)
// })()

//方法二
(async (params) => {
    function lala() {
        // return Promise.resolve("成功")
        return Promise.reject("失败")
    }

    try {
        let data = await lala()
        console.log(data)
    }catch (e) {
        console.log(e)
    }
})()