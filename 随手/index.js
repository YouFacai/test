let obj = {
    name: 'yzl',
    like: [1, 2, 3]
}

function deepClone(target, map = new Map()) {
    let temp = Array.isArray(target) ? [] : {}
    if (map.has(target)) return map.get(target)
    for (let key in target) {
        let val = target[key]
        map.set(target, temp)
        if (typeof val !== "object") {
            temp[key] = val;
        } else {
            temp[key] =  deepClone(val, map)
        }
    }
    return temp
}

let obj2 = deepClone(obj);
obj.like.push(4555)
console.log(obj2)