let arr = [1,[2,3,[4,5]]];

// 方法一
// function _flat(arr,temp) {
//     for(val of arr){
//         if(Array.isArray(val)){
//             _flat(val,temp)
//         }else{
//             temp.push(val)
//         }
//     }
//     return temp
// }
//
// console.log(_flat(arr,[]))

// 方法二
// function _flat(arr) {
//     while(arr.some(item=>Array.isArray(item))){
//         arr = [].concat(...arr)
//     }
//     return arr
// }
//
// console.log(_flat(arr))

// 方法三
function _flat(arr) {
    return arr.toString().split(",")
}

console.log(_flat(arr))