/**
 * 归并排序的思想
 * 三个函数
 *      + 一个用来返回最终结果
 *      + 一个用来分割数组或者链表
 *      + 一个用来比较
 * */
let nums = [3,2,1,4,6,8]
// 归并排序
function merge(arr1,arr2) {
    let result = [];
    while(arr1.length && arr2.length){
        let p1 = arr1[0],p2= arr2[0];
        if(p1 <= p2){
            result.push(arr1.shift());
        }else{
            result.push(arr2.shift());
        }
    }
    if(arr1.length) result = result.concat(arr1);
    if(arr2.length) result = result.concat(arr2);
    return result
}

function split(arr) {
    if(arr.length < 2) return arr;
    let mid = ~~(arr.length / 2);
    return merge(split(arr.slice(0,mid)),split(arr.slice(mid,arr.length)))
}

console.log(split(nums))