/*
*  判断left的原型链(letf.__proto__)上有没有right的原型对象(right.prototype)
* */
function myInstance(left,right) {
    // 不加这一条原始类型left.__proto__会被装箱，所以也可以检测原始类型
    if(typeof left !== ("Object" || "function"))  throw TypeError("myInstance 不能检测原始值类型")
    let a = left.__proto__;
    let b = right.prototype
    while(a !== null){
        if(a == b){
            return true
        }else{
            a = a.__proto__;
        }
    }
    return false
}

//数组
// console.log(`我自己手写的${myInstance([] , Array)}`,`js原生的${[] instanceof Array}`)
// // 对象
// console.log(`我自己手写的${myInstance({} , Object)}`,`js原生的${{} instanceof Object}`)
//原始值
console.log(`我自己手写的${myInstance(1 , Number)}`,`js原生的${1 instanceof Number}`)
