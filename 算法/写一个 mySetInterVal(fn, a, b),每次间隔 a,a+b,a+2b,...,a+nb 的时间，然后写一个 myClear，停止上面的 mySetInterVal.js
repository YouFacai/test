function mySetInterVal(fn,a,b) {
    let timer = null
    let index = 0
    function run() {
        timer = setTimeout((params) => {
            index++
            fn()
            run()
        },a + index * b)
    }

    run()

    return {
        myclear : function () {
            timer = clearTimeout(timer)
        }
    }
}

function k() {
    console.log(1)
}
let clear = mySetInterVal(k,1000,1000)

setTimeout((params) => {
    clear.myclear()
},3000)