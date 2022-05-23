function curing() {
    let arr = []
    return function add(...args){
        arr = arr.concat(args);
        // 浏览器中判断收集结束
        if(!args.length){
            return  arr.reduce((pre,next)=>pre + next)
        }
        add["toString"] = ()=>arr.reduce((pre,next)=>pre + next)
        return add
    }
}
add = curing()

console.log(add(1,2,3)(4)(5)())

