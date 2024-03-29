/**
 * 核心思想就算对数据做劫持
 * */
function _const(key,val) {
    if(!val) throw Error("const必须赋初始值")
    global[key] = val;
    Object.defineProperty(global,key,{
        // 因为const定义的变量不会再window全局下出现，所以把这个属性配置为不可叠代让他在全局window中遍历不到
        enumerable:false,
        configurable:true,
        get(){
            return val
        },
        set(newVal){
            if(newVal !== val){
                throw new Error("const值不可变");
            }else{
                return newVal
            }
        }
    })
}

_const('obj',{name:'yzl',age:"20"})
global.obj = {name:'yzl',age:"20"}
console.log(global.obj)