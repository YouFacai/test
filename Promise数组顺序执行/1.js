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
    args = [...args];
    let result = Promise.resolve();
    let arr = []
    args.forEach(ajax => {
        /**
         * 关键就是重新给result赋值
         * 只有第二个then状态确定了才会将下一次循环的result Promise状态变成fullfill
         *
         * // 同理可以顺序输出，但是就不做收集了
         * result = result.then(ajax)
         * */
        result = result.then(ajax).then(res => {
            // 只有这里的状态确定了返回歌Promise，下一次result.then(ajax)中的ajax才会执行
            arr.push(res)
            return arr
        })
    })
    return result
}

/**
 * 按顺序输出
 * 最终输出数组
 * */
run([settimer1, settimer2, settimer3]).then(res => {
    // settimer1，settimer2，settimer3
    console.log(res)
})
