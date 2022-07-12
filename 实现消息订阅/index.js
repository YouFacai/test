class eventBus {
    constructor() {
        this.events = {}
    }

    // 绑定方法
    on(name, fn) {
        let keys = Object.keys(this.events);
        if (keys.includes(name)) throw new Error("方法已经存在");
        this.events[name] = fn;
    }

    // 触发方法
    emit(name, args) {
        let keys = Object.keys(this.events);
        if (!keys.includes(name)) throw new Error("方法不存在");
        this.events[name](args)
    }

    // 删除方法
    remove(name, args) {
        let keys = Object.keys(this.events);
        if (!keys.includes(name)) throw new Error("方法不存在");
        delete this.events[name]
    }
}

function fn(...args) {
    console.log("你好", ...args)
}

let test = new eventBus();
test.on('fn1', fn);
test.emit('fn1', 'yzl');
test.remove(fn1);