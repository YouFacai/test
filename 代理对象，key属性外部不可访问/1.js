let obj = {
    key: "1234",
    name: "yzl",
    showKey(){
        console.log(obj.key)
    }
}

let keys = ["key"]
let api = new Proxy(obj, {
    get(target, key, proxy) {
        if (keys.indexOf(key) != -1) {
            throw Error(`${key} 不可访问.`);
        }
        return Reflect.get(target, key, proxy);
    },
    set(target, key, value, proxy) {
        if (keys.indexOf(key) != -1) {
            throw Error(`${key} 不可修改`);
        }
        return Reflect.get(target, key, value, proxy);
    }
});

/**
 * api.key 外部不可访问
 * obj.key 可以访问
 * */
// console.log(api.key)
api.showKey()
