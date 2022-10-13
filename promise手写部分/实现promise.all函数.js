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
    let count = 0,path = [];
    return new Promise((resolve, reject) => {
        for(let item of args){
            item().then(res=>{
                count++;
                path.push(res)
                if(count === args.length){
                    resolve(path)
                }
            }).catch(err=>{
                reject(err)
            })
        }
    })
}

_all([fn1,fn2]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})