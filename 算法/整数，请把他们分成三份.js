
function sliceArray (arr, count) {
    let average = arr.reduce((pre,next)=>pre+next,0) / count
    arr.sort((a,b)=>b-a);
    let result = new Array(count).fill(0);

    const getArr = function () {
        let sum = 0,temp = [];
        arr.forEach((v, i) => {
            if (sum + v <= average) {
                sum += v
                temp.push(v)
                arr.splice(i, 1)
            }
        })
        return temp;
    }

    result.forEach((item,index)=>{
        result[index] = index == result.length-1 ? arr : getArr()
    })
    return result
}

console.log(sliceArray( [1,2,3,4,5,6,7,8],3))