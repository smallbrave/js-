//工厂模式其实就是将创建对象的过程单独封装。
//工厂模式的目的，就是为了实现无脑传参，就是为了爽！

//适用于： 在一个工程之中有很多的构造函数，但是这些构造函数有很多的相似
//之处，为了简化创建对象的操作，创建一个工厂，用来创建对象

function Coder(name, age) {
    this.name = name
    this.age = age
    this.career = 'coder'
    this.work = ['写代码', '写系分', '修Bug']
}

function ProductManager(name, age) {
    this.name = name
    this.age = age
    this.career = 'product manager'
    this.work = ['订会议室', '写PRD', '催更']
}

function Factory(name, age, career) {
    let work
    switch (career) {
        case 'coder':
            return new coder(name, age)
        case 'product manager':
            return new ProductManager(name.age);
            //......
    }
}