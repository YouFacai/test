/**
 * 归并排序的思想
 * 三个函数
 *      + 一个用来返回最终结果
 *      + 一个用来分割数组或者链表
 *      + 一个用来比较
 * */
let arr = [1,2233,4,6,322,23,1123];

function merge(arr1,arr2){
    let temp = [],key = 0;
    while(arr1.length && arr2.length){
        let val1 = arr1[0],val2 = arr2[0]
        if(val1 >= val2){
            temp.push(val2)
            arr2.shift()
        }else{
            temp.push(val1)
            arr1.shift()
        }
    }
    if(!arr1.length) temp = temp.concat(arr2)
    if(!arr2.length) temp = temp.concat(arr1)
    return temp
}

function splitArr(arr) {
    let len = arr.length;
    if(len < 2) return  arr
    return merge(splitArr(arr.slice(0,~~(len/2))),splitArr(arr.slice(~~(len/2),arr.length)))
}

function sort(arr) {
    return splitArr(arr)
}

console.log(sort(arr))