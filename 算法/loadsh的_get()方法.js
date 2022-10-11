var object = { 'a': [{ 'b': { 'c': 3 } }] };

function _get(obj,path,defaultVal = "undefined") {
    let newpath = [];
    if(Array.isArray(path)){
        newpath = path
    }else{
        newpath = path.replace(/\[/g,".").replace(/\]/g,"").split(".")
    }
    return newpath.reduce((pre,next)=>{
        return (pre || {})[next]
    },obj) || defaultVal
}

console.log(_get(object,"a.0.b.c"))