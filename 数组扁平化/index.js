let arr = [1,[2,3,[4,5]]];
function _flat(arr,temp) {
    for(val of arr){
        if(Array.isArray(val)){
            _flat(val,temp)
        }else{
            temp.push(val)
        }
    }
    return temp
}

console.log(_flat(arr,[]))