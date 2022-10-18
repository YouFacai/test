Array.prototype._map = function (callback,obj) {
    let len = this.length,result = [];
    if(!len) return result;

    for(let i = 0;i<this.length;i++){
        result[i] =  callback.call(obj,this[i],i,this)
    }
    return  result
}

let arr = [1,2,3]

let newArr = arr.map(item=>item+1)
console.log(newArr)