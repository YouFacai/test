function fetchData1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('promise1的结果')
        }, 3000)
    })
}

function fetchData2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('promise2的结果')
        }, 1000)
    })
}

/**
 * 实现的效果是用 Generator模拟 async、await
 * 核心思想：
 *  + let result = myGenerator.next(); 返回的是{value:"Promsie",done:false}
 *    我们就可以通过 result.value instanceof  Promise
 *    判断yield后面的是不是一个promise，如果是promise我们就拿到他的res使用let result =
 *    myGenerator.next(res)把res赋值给上一个yield，同时改变result进行下一个next()，直到done为true
 *
 * */
function run(taskDef) {
   let myGenerator = taskDef();
   let result = myGenerator.next();

   function next(){
       if(!result.done){
           if(result.value instanceof  Promise){
               result.value.then(res=>{
                   result = myGenerator.next(res)
                   next()
               })
           }else{
               result = myGenerator.next(result.value)
               next()
           }
       }
   }

   next()
}

//调用
run(function* () {
    let contents = yield fetchData1();
    console.log("fetchData1通过")
    let test = yield fetchData2()
    console.log("fetchData2通过")
    console.log('------')
})
