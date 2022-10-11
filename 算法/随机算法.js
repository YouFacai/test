let arr = [1,2,3,4,5];

/*
// 使用sort进行随机   Math.random() 会随机出0-1的随机数
arr.sort(()=>0.5 - Math.random())
console.log(arr)
*/

// 原地处理
let len = arr.length;
for(let i = 0;i<arr.length;i++){
    let key = ~~(Math.random() * len);
    let temp = arr[key];
    arr[key] = arr[len-1]
    arr[len-1] = temp
    len--;
}
console.log(arr)