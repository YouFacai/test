/**
 * obj有特殊规则，字符串的key会按数组大小排序
 *
 * map会按照添加的顺序进行排序
 * */

let obj = {
    0: 0,
    like: [1, 2, 3],
    name: 'yzl',
    211: 211,
    22:22
}

console.log(obj)

// let obj1 = new Map([[3, 3], [2,2],[1,1]])
// console.log(obj1)