/**
 * Generator.prototype 上有三个方法
 * + next()
 * + return()
 * + throw()
 * */

function *test() {
    try{
        let x = yield 1
        yield 2 + x
        yield 3
        yield 4
        return 5
    }catch (e) {
        console.log(e)
    }
}

let example = test();

/**
 * next()使用
 * + example.next()的值对应的就是yield的值
 * + example.next(5)的 5 对应的就是当前next对应yield上一个yield返回值，不指定的情况下yield的值默认为undefined
 * + example.next() 返回值的数据结构：
 *      + { value: 值, done: false/true }  false表示还可以继续叠代
 * + example.next()会执行到return终止，如果没有return 就返回 { value: undefined, done: true } 如果有value就是return的那个值
 * */
// console.log(example.next())
// console.log(example.next(5))

/**
 * return()使用
 * + return() 让生成器结束，并且立刻返回指定value，如果不指定就返回undefined
 * */
// console.log(example.next())
// console.log(example.return("结束"))
// console.log(example.next())
// console.log(example.next())

/**
 * throw()使用
 * + throw() 向该生成器抛出一个异常，该异常通常可以通过 try...catch 块进行捕获.
 * */
example.next();
example.throw(new Error("Something went wrong")); // "Error caught!"