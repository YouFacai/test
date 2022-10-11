btn.onclick = fd(fn,1000,true)

function fd(f,timer,direction) {
    let time = null

    return function () {
        let isok = direction && time == null
        clearTimeout(time)
        time = setTimeout((params) => {
            if(!direction) f()
            time = clearTimeout(time)
        },timer)
        if(isok) f()
    }
}

function fn() {
    console.log(1111)
}