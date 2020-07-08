//保证一个类只有一个实例，并提供一个访问他的全局访点

//ES5
function SingleDog() {}

//使用闭包
var single = (function() {
    var instance = null;
    return function() {
        if (!instance) {
            instance = new SingleDog();
        }
        return instance;
    }
})();
//使用就直接single()或者new single()也行

//ES6
class SingleDog {
    constructor() {
        console.log("构造函数");
    }

    //使用静态变量
    static getInstance() {
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;
    }
}

//使用就直接调用SingleDog.getInstance();