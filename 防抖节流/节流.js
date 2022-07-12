btn.onclick = fd(fn, 1000)

function fd(f, wait) {
    let timer = null, pre = 0;
    return function () {
        let diff = wait - (+new Date() - pre);
        if (diff < 0) {
            f();
            clearTimeout(timer);
            pre = +new Date();
        } else if(!timer) {
            timer = setTimeout((params) => {
                f();
                clearTimeout(timer);
                pre = +new Date();
            }, diff)
        }
    }
}

function fn() {
    console.log(1111)
}