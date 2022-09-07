function f() {
    if(!new.target){
        throw new Error("函数需要new调用")
    }
    console.log("ok")
}

f()
new f()