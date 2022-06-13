/**
 * 核心思想就算对数据做劫持
 * */
function _const(key,val) {
    global[key] = val;
    Object.defineProperty(global,key,{
        enumerable:false,
        configurable:false,
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
global.obj.name = 'sjl'
console.log(global.obj)