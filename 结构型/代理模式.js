//一个对象不能直接访问另一个对象，需要一个
//第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。

//es6中代表人物： proxy(obj,handle)
//代理： 事件代理、虚拟代理、缓存代理和保护代理

//1、事件代理：一个父元素下有很多的子元素，如何为每一个子元素添加一个事件=> 使用事件代理
//利用事件冒泡的原理，我们可以在父元素上面监听事件的触发

//获取父元素
const father = document.getElementById('father')
    // 给父元素安装一次监听函数
father.addEventListener('click', function(e) {
    // 识别是否是目标子元素(使用e.target.tagName)
    if (e.target.tagName === 'A') {
        // 以下是监听函数的函数体
        e.preventDefault()
        alert(`我是${e.target.innerText}`)
    }
})

//2、虚拟代理： 没理解到（但是其是一种为了实现 单一原则 而存在的一种代理的模式）

//3、缓存代理： 就是将一些常用的数据存储起来，方便之后的使用

//4、保护代理： 与proxy的实现一样，通过getter和setter对你需要访问的数据进行一种保护