function fetch(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, 500 * x);
    });
}

/*
* for循环，for of循环都可以支持异步
* */
async function test() {
    let arr = [3, 2, 1];
    for (const item of arr) {
        const res = await fetch(item);
        console.log(res);
    }
    console.log("end");
}

/*
* forEach只能支持同步
* */
function test() {
    let arr = [3, 2, 1];
    arr.forEach(async (item) => {
        const res = await fetch(item);
        console.log(res);
    });
    console.log("end");
}

test()