/**
 * 直接for of遍历一个对象是不允许的！！！
 * 对象是没有迭代器的
 * */
let obj = {
    name: 'yzl',
    age: 21,
    likes: ["c++", "js", "java"]
}

// // TypeError: obj is not iterable
// for (let val of obj) {
//     console.log(val)
// }

/**
 * 方法一
 * 使用生成器函数来实现对象的遍历
 * 原理：使用的就是Generator生成器可以遍历的特点，在调用for of的时候它会自动帮忙调用next方法
 * */
// function* myGenerator(obj) {
//     let keys = Object.keys(obj);
//     for (let key of keys) {
//         yield [key, obj[key]]
//     }
// }

/**
 * 方法二
 *
 * */

function myGenerator(obj) {
    let index= 0,keys = Object.keys(obj);
    Object.prototype[Symbol.iterator] = function () {
        return {
            next : function () {
                if(index < keys.length){
                    return  {
                        done : false,
                        value: [keys[index],obj[keys[index++]]]
                    }
                }else{
                    return {
                        done : true,
                        value : undefined
                    }
                }
            }
        }
    }
}

myGenerator(obj)
for (const [key, val] of obj) {
    console.log(key, val)
}