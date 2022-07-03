function person() {
    this.personName = "yzl"
    this.like = [1,2,3]
}

function son() {
    person.call(this);
    this.sonName = "lte"
}

person.prototype.sayfather = function () {
    console.log("爸爸")
}

/**
 * 组合式继承使用 new Person()
 * 寄生式继承使用 Object.create(person.prototype)
 *
 * 优势 ： 避免了两次调用 Person函数
 * */
son.prototype = Object.create(person.prototype)
son.constructor = son
let son1 = new son();
let son2 = new son();

console.log(son1.like === son2.like)

// 报错call继承会导致父原型上的方法丢失
son1.sayfather()


