function red() {
    console.log("red")
}

function green() {
    console.log("green")
}

function yellow() {
    console.log("yellow")
}

function fn(args) {
    let promise = Promise.resolve();
    let index = 0

    function next(index) {
        promise = promise.then(args[index]).then((params) => {
            setTimeout((params) => {
                if (index >= args.length) {
                    next(0)
                } else {
                    next(index + 1)
                }
            }, 1000)
        })
    }

    next(index)
}

fn([green, yellow, red])