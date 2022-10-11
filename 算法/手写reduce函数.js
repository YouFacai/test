Array.prototype._reduce = function reduce(callback,initnum){
    let result = this[0],
        index = 1;
    //判断有没有初始值
    if(typeof initnum !=='undefined'){
        result = initnum;
        index = 0;
    }
    //循环累加
    for(let i = 0;i<this.length;i++){
        if(index == this.length) return  result
        result = callback(result,this[index++],i);
    }
    return result;
};

let result = [1,2,3]._reduce((result, item, index) => {
    return result + item
},1);

console.log(result)