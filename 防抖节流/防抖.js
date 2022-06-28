btn.onclick = fd(fn,1000)

function fd(f,timer) {
    let time = null
    return function () {
        clearTimeout(time)
        time = setTimeout((params) => {
            f()
        },timer)
    }
}

function fn() {
    console.log(1111)
}