function fn() {
    console.log("你好")
}

function _settimer(fn,wait) {
    let timer = null,count = 0;
    let start = +new Date();
    function run(){
        let diff = +new Date() - (wait * count++ + start);
        fn();
        timer = setTimeout(run,wait -diff)
    }
    run();
    return {
        cancel : function () {
            clearTimeout(timer)
        }
    }
}
_settimer(fn,1000)
