/**
 *  深拷贝
 * */
let obj = {
    name: "yzl",
    age: 20,
    like: {
        one: 1,
        twe: 2
    },
    arr: [1, 2, 3, 4]
}

let arr = [1, 2, 3, 4]

function deepClone(target) {
    let result = myType(target) === "Object" ? {} : [];
    for (const key in target) {
        let cur = target[key];
        if (typeof cur === "object") {
            result[key] = deepClone(cur);
        } else {
            result[key] = cur
        }
    }
    return result
}

let deepObj = deepClone(obj)
// 检测对象深拷贝了没有
deepObj.like.one = "变了"
// 检测数组深拷贝了没有
deepObj.arr.push(5)
console.log(obj, deepObj)

function myType(target) {
    return Object.prototype.toString.call(target).match(/\s(.*)\]/)[1]
}