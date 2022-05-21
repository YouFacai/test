// /*
// *  方法一：使用left.__proto__会帮原始值自动装箱
// *  判断left的原型链(letf.__proto__)上有没有right的原型对象(right.prototype)
// * */
// function myInstance(left,right) {
//     // 不加这一条原始类型left.__proto__会被装箱，所以也可以检测原始类型
//     // if(typeof left !== ("Object" || "function"))  throw TypeError("myInstance 不能检测原始值类型")
//     let a = left.__proto__;
//     let b = right.prototype
//     while(a !== null){
//         if(a == b){
//             return true
//         }else{
//             a = a.__proto__;
//         }
//     }
//     return false
// }
//
// // Number
// console.log(`我自己手写的${myInstance(1 , Number)}`,`js原生的${1 instanceof Number}`)
// // String
// console.log(`我自己手写的${myInstance("1" , String)}`,`js原生的${"1" instanceof String}`)
// // String
// console.log(`我自己手写的${myInstance(true , Boolean)}`,`js原生的${true instanceof Boolean}`)

// 方法二
String.prototype[Symbol.hasInstance] = function (x) {
    return typeof x === "string"
}
// 其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基本数据类型。
console.log("1111" instanceof String.prototype)