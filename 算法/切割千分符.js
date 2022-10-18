let str = '123213321313'
function f(str) {
    return str.replace(/(\d{1,3})(?=(\d{3})+$)/g,(_,q1)=>{
        return q1 + '.'
    })
}

console.log(f(str))