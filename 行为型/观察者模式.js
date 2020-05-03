//观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，
//当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。

//谈到观察者模式就必须说说 发布-订阅模式，其实观察者模式别名就是发布-订阅模式
//所以，实现一个观察者模式需要定义一个 发布人 以及一个 订阅人

//发布者：负责构建一个订阅人数组，用来储存所有的订阅人；可以添加订阅人到订阅数组；同时也可以移除；、
//最后就是告诉订阅人，可以做事了

//订阅人： 负责做事就可以了；

class Publisher {
    constructor() {
        console.log("发布者创建");
        //创建订阅者数组
        this.observers = [];
    }
    add(observer) {
        //添加订阅者
        this.observers.push(observer);
    }
    remove(observer) {
        //删除某一个订阅者
        this.observers.forEach((item, index) => {
            if (item == observer) {
                this.observers.splice(index, 1);
            }
        })
    }
    notify() {
        //通知订阅者们
        this.observers.forEach((item) => {
            item.update();
        })
    }
}

class Observer {
    constructor() {
        console.log("订阅者创建");
    }
    update() {
        console.log("工作时间到");
    }
}

//虽然发布-订阅模式是观察者模式的别名，但是两个模式还是有根本的区别
//发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式。
//有无第三方的参与，决定到底是不是观察者模式

//Vue中的 Event Bus就是一个典型的发布-订阅模式
//浏览器中的事件池也是如此
class EventBus {
    constructor() {
            this.handers = [];
        }
        // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
        //订阅者
    on(eventName, cb) {
        // 先检查一下目标事件名有没有对应的监听函数队列
        if (!this.handlers[eventName]) {
            // 如果没有，那么首先初始化一个监听函数队列
            this.handlers[eventName] = []
        }
        // 把回调函数推入目标事件的监听函数队列里去
        this.handlers[eventName].push(cb)
    }

    // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
    //发布者
    emit(eventName, ...args) {
        // 检查目标事件是否有监听函数队列
        if (this.handlers[eventName]) {
            // 如果有，则逐个调用队列里的回调函数
            this.handlers[eventName].forEach((callback) => {
                callback(...args)
            })
        }
    }

    // 移除某个事件回调队列里的指定回调函数
    off(eventName, cb) {
        const callbacks = this.handlers[eventName]
        const index = callbacks.indexOf(cb)
        if (index !== -1) {
            callbacks.splice(index, 1)
        }
    }

    // 为事件注册单次监听器
    once(eventName, cb) {
        // 对回调函数进行包装，使其执行完毕自动被移除
        const on = (...args) => {
            cb.apply(...args)
            this.off(eventName, on)
        }
        this.on(eventName, on)
            //上述操作实现了只触发一次的功能，通过新建一个函数，函数中有调用回调函数、也有移除该监听器
            //通过on对该函数进行一个触发，然后里面的回调函数被调用，该监听器被移除
    }
}

//之后的使用，皆需要这个Event Bus类的参与，也就是第三方=>发布-订阅模式