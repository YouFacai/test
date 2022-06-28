btn.onclick = fd(fn, 1000)

function fd(f, time) {
    let timer = null,pre = 0;
    return function () {
        let wait = time - (+new Date() - pre);
        if(wait < 0){
            clearTimeout(timer);
            fn();
            pre = +new Date()
        }else if (!time){
            timer = setTimeout((params) => {
                   clearTimeout(timer);
                   fn();
                   pre = +new Date()
            },0)
        }
    }
}

function fn() {
    console.log(1111)
}