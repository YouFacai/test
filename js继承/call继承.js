function person() {
    this.personName = "yzl"
    this.like = [1,2,3]
}

function son() {
    person.call(this);
    this.sonName = "lte"
}

let son1 = new son();
let son2 = new son();

console.log(son1.like === son2.like)
person.prototype.sayfather = function () {
    console.log("爸爸")
}

// 报错call继承会导致父原型上的方法丢失
// son1.sayfather()


