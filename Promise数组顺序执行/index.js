function settimer1() {
    return new Promise(resolve => {
        setTimeout((params) => {
            console.log("settimer1")
            resolve("settimer1")
        }, 2000)
    })
}

function settimer2() {
    return new Promise(resolve => {
        setTimeout((params) => {
            console.log("settimer2")
            resolve("settimer2")
        }, 1000)
    })
}

function settimer3() {
    return new Promise(resolve => {
        setTimeout((params) => {
            console.log("settimer3")
            resolve("settimer3")
        }, 3000)
    })
}

function run(args) {
    let promise = Promise.resolve();
    let result = [];
    for(let ajax of args){
        promise = promise.then(ajax).then(res=>{
            result.push(res);
            return result
        })
    }
    return promise
}

/**
 * 按顺序输出
 * 最终输出数组
 * */
run([settimer1, settimer2, settimer3]).then(res => {
    // settimer1，settimer2，settimer3
    console.log(res)
})
