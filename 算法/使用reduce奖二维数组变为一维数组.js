let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
const newArr = function(arr){
   return arr.reduce((pre,next)=>{
       return pre.concat(Array.isArray(next) ? newArr(next) : next)
   },[])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
