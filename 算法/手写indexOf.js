// 数组

Array.prototype._indexOf = function (target,fromIndex = 0) {
    if(!target) return -1;
    for(let i = fromIndex;i<this.length;i++){
        if(this[i] == target){
            return  i
        }
    }
    return  -1
}
// 测试
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
// 测试一：不设置 fromIndex
console.log(beasts._indexOf("bison"))
// 1
console.log(beasts._indexOf("bison",1))
// 1
// 测试二：设置 fromIndex
console.log(beasts._indexOf("bison",2))
// 4

console.log("--------------------------")

// 字符串
String.prototype._indexOf = function (target,lastIndex) {
    let reg = new RegExp(`${target}`,"ig");
    reg.lastIndex = lastIndex;
    let result = reg.exec(this);
    return result.length !== 0 ? result["index"] : -1
}

console.log("abc"._indexOf("b"))
