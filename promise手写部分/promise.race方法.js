/**
 * 1.全部都正确才返回正确
 * 2.返回的是一个数组
 * */

function fn1() {
    return new Promise(resolve => {
        setTimeout((params) => {
            resolve("1000ms")
        }, 1000)
    })
}

function fn2() {
    return new Promise(resolve => {
        setTimeout((params) => {
            resolve("2000ms")
        }, 2000)
    })
}

function fn3() {
    return new Promise((resolve, reject) => {
        setTimeout((params) => {
            reject("fn3失败")
        }, 2000)
    })
}

function _race(args) {
    return new Promise((resolve, reject) => {
        for(let p of args){
            p().then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        }
    })
}

_race([fn1,fn2,fn3]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})