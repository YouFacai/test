global.obj = {
    name: "yzl",
    age: 123,
    like: [1, 2, 3]
}

//configurable 控制是否可以删除 writable 控制是否可以修改(赋值)
Object.defineProperty(global,'obj',{
    /**
     * 只读
     * 支队当前劫持的对象有效
     * */
    writable:false,
    // 如果是只读,那么有set属性就是不对的
    // set(val){
    //     return val
    // }
})

obj = '李雨澍'
console.log(obj)