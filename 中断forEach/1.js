let arr = [1, 2, 3, 4, 5, 6];

try {
    arr.forEach((item) => {
        console.log(item, "@");
        if (item === 3) {
            throw new Error("到3了我要中断了")
        }
    })
} catch (err) {
    console.log(err)
}

