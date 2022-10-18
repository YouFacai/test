function _fn(target){
    function deep(target,weakMap = new WeakMap()) {
        weakMap.set(target,target)

        for(let key in target){
            let cur = target[key]
            if(typeof cur == 'object'){
                if(weakMap.has(target) || deep(cur,weakMap)){
                    return true
                }
            }
        }
        return  false
    }

    return typeof  target == 'object' ? deep(target):false
}
let obj = {

}
obj.a = obj

console.log(_fn(obj))