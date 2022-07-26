function fn() {
    console.log("你好")
}

function _settimer(fn,wait) {
    let timer = null, start = +new Date(),count=0;

    function run() {
        let diff = +new Date() - (start + count++ * wait);
        fn();
        setTimeout(run,wait-diff)
    }
    run()

    return {
        cancel :function () {
            clearTimeout(timer)
        }
    }
}
_settimer(fn,1000)
