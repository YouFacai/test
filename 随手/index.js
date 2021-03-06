function fetch(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, 500 * x);
    });
}

async function test() {
    let arr = [3, 2, 1];
    for (const item of arr) {
        const res = await fetch(item);
        console.log(res);
    }
    console.log("end");
}

test()