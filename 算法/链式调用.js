// 方法一
// function f() {
//     this.k = "name"
// }
// f.prototype.method = function(key) {
//     console.log(key)
//     return this
// }
//
// let obj = new f()
// obj.method("yzl").method("yzl")

// 方法二
let obj = {
    fn(name){
        console.log(name)
        return this
    }
}
obj.fn("yzl").fn("sjl")