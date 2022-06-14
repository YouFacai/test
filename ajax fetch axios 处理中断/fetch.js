/**
 * 使用AbortController生成出来 signal，在fetch
 * */

const controller = new AbortController();
const signal = controller.signal;

function fn() {
    return new Promise((resolve,reject) => {
        fetch("http://127.0.0.1:3000/test",{
            method:'get',
            signal
        }).then(res=>{
            return res.text();
        }).then(res=>{
            console.log(res)
            resolve(res)
        }).catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}

function timer(time){
    return  new Promise(resolve => {
        setTimeout((params) => {
            controller.abort();
            resolve("超时了，我要把这次fetch中断了")
        },time)
    })
}

Promise.race([timer(1000),fn()]).then(res=>{
    console.log(res)
})