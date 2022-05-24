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

function deepClone(target, weakMap = new WeakMap()) {
    let result = myType(target) === "Object" ? {} : [];
    /**
     * 判断weakMap中是否缓存过+ 缓存过就退出递归
     * */
    if(weakMap.has(target)){
        return weakMap.get(target)
    }

    for (const key in target) {
        let cur = target[key];
        weakMap.set(target,result)
        if (typeof cur === "object") {
            result[key] = deepClone(cur,weakMap);
        } else {
            result[key] = cur
        }
    }
    return result
}

/*-----------------------*/
// 递归的引用
obj.obj1 = obj

let deepObj = deepClone(obj)
// 检测对象深拷贝了没有
deepObj.like.one = "变了"
// 检测数组深拷贝了没有
deepObj.arr.push(5)
console.log(obj, deepObj)



function myType(target) {
    return Object.prototype.toString.call(target).match(/\s(.*)\]/)[1]
}