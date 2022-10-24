/**
 * 转换方法
    使用 Array.from()
    使用 Array.prototype.slice.call()
    使用 Array.prototype.forEach() 进行属性遍历并组成新的数组
    使用 ...拓展运算符必须要有迭代器才可以，没有迭代器我们就要手写迭代器
    转换须知
    转换后的数组长度由 length 属性决定。索引不连续时转换结果是连续的，会自动补位。
 * 
*/


/**
 * Array.from();
 * 1.根据length生成数组长度，
 * 2.仅考虑0或者正整数
 * 3.缺失的部分会用undefined补充
 */
let al1 = {
    length: 4,
    0: 0,
    1: 1,
    3: 3,
    4: 4,
    5: 5,
};

console.log(Array.from(al1)) // [0, 1, undefined, 3]

/**
 * Array.prototype.slice.call(al1);
 * 1.根据length生成数组长度，
   2.产生稀疏数组
 * */
console.log(Array.prototype.slice.call(al1));


// 使用拓展运算符
let arrayLike = {
    "0": "a",
    "1": "b",
    "3": "d",
    "4": "e",
    "length": 3
}

arrayLike[Symbol.iterator] = function (params) {
    let len = this.length, index = 0, keys = Object.keys(this), data = this;
    return {
        next: function () {
            if (index < len) {
                return {
                    done: false,
                    value: data[index++]
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }
}
let a = [...arrayLike]
console.log(a);