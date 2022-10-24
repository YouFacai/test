// https://github.com/lgwebdream/FE-Interview/issues/36
// 第 30 题：使用ES6 的Proxy实现数组负索引。 （负索引：例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推）

let arr = [1,2,3,4,5,6,7,8,9];

let temp = new Proxy(arr,{
    get(target,key){
        if(key < 0){
            return target[Number(target.length) + Number(key)]
        }
        return target[key]
    }
})

console.log(temp[-2]);