function PlayBoy(name) {
    this.name = name
    this.stack = [];
    setTimeout((params) => {
        this.next()
    },0)
}

PlayBoy.prototype.sayHi = function () {
    const fn = (params) => {
        console.log(`大家好我是${this.name}`)
        this.next();
    }
    this.stack.push(fn)
    return this
}

PlayBoy.prototype.sleep = function (time) {
    const fn = (params) => {
        setTimeout((params) => {
            this.next();
        }, time)
    }
    this.stack.push(fn)
    return this
}

PlayBoy.prototype.play = function (title) {
    const fn = (params) => {
        console.log(`我在${title}`)
        this.next()
    }
    this.stack.push(fn)
    return this
}

PlayBoy.prototype.next = function () {
    let fn = this.stack.shift()
    fn && fn();
}

const boy = new PlayBoy('Tom')
// 输出
// 大家好我是Tom
// 1s 之后
// 我在玩王者
// 2s 之后
// 我在玩跳一跳
boy.sayHi().sleep(1000).play('王者').sleep(2000).play('跳一跳')
