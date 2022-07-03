function curing(){
    let result = [];
    return function add(...args) {
         if(!args.length){
             return result.reduce((pre,next)=>pre+ next);
         }
         add["toString"] =()=> result.reduce((pre,next)=>pre+ next);
         result = result.concat(args);
         return add
    }
}

let add = curing()

console.log(add(1,2,3)(4)(5)())
alert(add(1,2,3)(4)(5))

