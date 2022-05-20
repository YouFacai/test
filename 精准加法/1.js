let a = 0.1,b = 0.2;

console.log(`不精准的计算`,a+b);

function add(a,b) {
    let reg = /\.(\d+)/;
    let alen = String(a).match(reg)[1];
    let blen = String(b).match(reg)[1];
    let max = Math.max(alen,blen);
    return (a * (10 ** max) + b * (10 ** max)) / (10 ** max)
}

console.log("精准计算",add(a,b))