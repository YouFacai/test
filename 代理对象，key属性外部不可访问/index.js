let obj = {
    key: "1234",
    name: "yzl",
    showKey() {
        console.log(obj.key)
    }
}

let api = new Proxy(obj, {
    get(target, p, receiver) {
        if (p === 'key') {
            throw  new Error("不可以用api访问key")
        }
    },
    set(target, p, value, receiver) {
        if (p === 'key') {
            throw  new Error("不可以用api修改key")
        }
    }
});

/**
 * api.key 外部不可访问  console.log(api.key)
 * obj.key 可以访问   console.log(obj.key)
 * */
console.log(obj.key)

