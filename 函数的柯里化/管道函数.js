const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;

const compose = function (...args){
    return function (num) {
        return  args.reduceRight((pre,next)=>{
            return next(pre)
        },num)
    }
}

//大函数执行返回小函数
console.log(compose(add1,mul3,div2)(2))	//=>4