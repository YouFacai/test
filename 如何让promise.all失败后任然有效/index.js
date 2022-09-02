var p1 = new Promise((resolve, reject) => {
    resolve('p1');
});
var p2 = new Promise((resolve, reject) => {
    resolve('p2');
});
var p3 = new Promise((resolve, reject) => {
    reject('p3');
});
Promise.all([p1,p2,p3].map(p=>p.catch(e=>console.log("失败")))).then(res=>console.log(res))


// 方法二
// Promise.allSettled