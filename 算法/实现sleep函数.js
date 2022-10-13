// // 1.promise + then
// function sleep(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout((params) => {
//             resolve(time)
//         },time)
//     })
// }
//
// sleep(3000).then(res=>{
//     console.log(111)
// })

// // 2 生成器
// function *sleep(time) {
//     yield new Promise(resolve => {
//         setTimeout((params) => {
//             resolve()
//         },time)
//     })
// }
//
// sleep(2000).next().value.then(res=>{
//     console.log("成功")
// })

// // async await
// function f(time) {
//     return new Promise(resolve => {
//         setTimeout((params) => {
//             resolve()
//         },time)
//     })
// }
// async function sleep(time){
//     await f(3000);
//     console.log("nihao")
// }
//
// sleep(3000)

function f() {
    console.log(111)
}

setTimeout(f,3000)