const CancelToken = axios.CancelToken;
let cancel;

function getData() {
    return new Promise(resolve => {
        axios.get('http://127.0.0.1:3000/test',{
            cancelToken:new CancelToken(function excutor(c) {
                cancel = c
            })
        }).then(res=>{
            resolve(res.data)
        })
    })
}

function timer(time){
    return  new Promise(resolve => {
        setTimeout((params) => {
            cancel()
            resolve("超时了，我要把这次axios中断了")
        },time)
    })
}

Promise.race([getData(),timer(1000)]).then(res=>{
    console.log(res)
})