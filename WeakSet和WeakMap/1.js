/**
 * WeakMap特点：
 * + key只能是引用类型值
 * + 它的key是弱应用，在外部不需要key的时候会自动释放
 * */
let obj = {};

// 方法一
let weakMap = new WeakMap();
weakMap.set(obj, "yzl")

/**
 * 方法二 ：
 * let weakMap = new WeakMap([[obj,"yzl"]]);
 * */
console.log("obj还没释放值之前", weakMap.get(obj))
obj = null
console.log("obj释放值之后", weakMap.get(obj))
/*-------------------------------*/


/**
 * WeakSet特点：
 * + 值只能是一个对象
 * + 它的val是弱应用，在外部不需要val的时候会自动释放
 * */

let objSet = {name: "yzl"}
let weakSet = new WeakSet([objSet, {age: 21}]);
// 报错
// let weakSet = new WeakSet([1, 2]);
console.log(weakSet.has(objSet))