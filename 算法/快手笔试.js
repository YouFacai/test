function doExchange(arr, depth) {
    for(let i = 0;i<arr[depth].length;i++){
        result[depth] = arr[depth][i];
        if(depth != arr.length -1){
            doExchange(arr,depth+1)
        }else{
            results.push([...result])
        }
    }
}

// var results声明的变量是全局的（全局下）

function test(arr) {
    /**
     * results声明的变量是全局的
     *
     * var results声明的变量是局部的（函数中）
     * */
    results = [];
    result = [];
    doExchange(arr, 0);
    console.log(results);
}

garr = [
    ['红色', '绿色', '白色'],
    ['大', '中', '小'],
    ['64G', '128G'],
]
test(garr)
