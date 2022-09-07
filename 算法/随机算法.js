let arr = [1,2,3,4,5];

/*
// 使用sort进行随机   Math.random() 会随机出0-1的随机数
arr.sort(()=>0.5 - Math.random())
console.log(arr)
*/

// 原地处理
let len = arr.length;
for(let i = 0;i<len;i++){
    let key = ~~(Math.random() * len);
    len--;
    let temp = arr[key];
    arr[key] = arr[arr.length-1]
    arr[arr.length-1] = temp
}
console.log(arr)