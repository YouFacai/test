function person() {
    this.personName = "yzl"
    this.like = [1,2,3]
}

function son() {
    this.sonName = "lte"
}

person.prototype.sayfather = function () {
    console.log("爸爸")
}

son.prototype = new person()

let son1 = new son();
let son2 = new son();

// 输出的公共方法
son1.sayfather()
son1.personName = 'sjl'
// 引用类型son1 , son2 公用一个堆地址
son1.like.push(4)
console.log(son1.like,son2.like)
