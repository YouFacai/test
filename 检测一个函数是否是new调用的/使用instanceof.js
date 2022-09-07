function f() {
    if(this instanceof f){
        console.log("ok")
    }else{
        throw new Error("我错了")
    }
}

// f()
new f()