//定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。
//重点：  算法提取、算法封装、分发优化

//策略模式就是通过一种方式，将一些复杂的逻辑拆分，之后对逻辑进行重构，使其易于理解，方便管理

function askPrice(tag, originPrice) {

    // 处理预热价
    if (tag === 'pre') {
        if (originPrice >= 100) {
            return originPrice - 20
        }
        return originPrice * 0.9
    }
    // 处理大促价
    if (tag === 'onSale') {
        if (originPrice >= 100) {
            return originPrice - 30
        }
        return originPrice * 0.8
    }

    // 处理返场价
    if (tag === 'back') {
        if (originPrice >= 200) {
            return originPrice - 50
        }
        return originPrice
    }

    // 处理尝鲜价
    if (tag === 'fresh') {
        return originPrice * 0.5
    }

}
//以上代码是我们常写的用于处理复杂逻辑的ifelse代码块儿
//当有新的需求时，就会在上面的代码中再添加一个if块儿

// 处理新人价
if (tag === 'newUser') {
    if (originPrice >= 100) {
        return originPrice - 50
    }
    return originPrice
}
//反反复复的使用ifelse使得代码长，且不好维护，所以现在把他们抽离出来

// 处理预热价
function prePrice(originPrice) {
    if (originPrice >= 100) {
        return originPrice - 20
    }
    return originPrice * 0.9
}

// 处理大促价
function onSalePrice(originPrice) {
    if (originPrice >= 100) {
        return originPrice - 30
    }
    return originPrice * 0.8
}

// 处理返场价
function backPrice(originPrice) {
    if (originPrice >= 200) {
        return originPrice - 50
    }
    return originPrice
}

// 处理尝鲜价
function freshPrice(originPrice) {
    return originPrice * 0.5
}

//之后通过一个函数来处理
function askPrice(tag, originPrice) {
    // 处理预热价
    if (tag === 'pre') {
        return prePrice(originPrice)
    }
    // 处理大促价
    if (tag === 'onSale') {
        return onSalePrice(originPrice)
    }

    // 处理返场价
    if (tag === 'back') {
        return backPrice(originPrice)
    }

    // 处理尝鲜价
    if (tag === 'fresh') {
        return freshPrice(originPrice)
    }
}
//准确的来说，上述代码也没有改变多少，只不过是把ifelse块儿里面的代码抽离为了函数，而且
//对于增加一个新的条件时要同时处理askPrice函数，还要有一个新的函数

// 处理新人价，添加到ifelse块儿
if (tag === 'newUser') {
    return newUserPrice(originPrice)
}

// 处理新人价，放在外面用于if中调用
function newUserPrice(originPrice) {
    if (originPrice >= 100) {
        return originPrice - 50
    }
    return originPrice
}

//之后，为了更加精简代码，且减少ifelse的使用
// 定义一个询价处理器对象
const priceProcessor = {
    pre(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 20;
        }
        return originPrice * 0.9;
    },
    onSale(originPrice) {
        if (originPrice >= 100) {
            return originPrice - 30;
        }
        return originPrice * 0.8;
    },
    back(originPrice) {
        if (originPrice >= 200) {
            return originPrice - 50;
        }
        return originPrice;
    },
    fresh(originPrice) {
        return originPrice * 0.5;
    },
};

//之后，要是使用，直接通过 '对象[属性]'的方式就可以完成
// 询价函数
function askPrice(tag, originPrice) {
    return priceProcessor[tag](originPrice)
}
//添加新的组成元素时，也就直接在对象上添加属性即可
priceProcessor.newUser = function(originPrice) {
    if (originPrice >= 100) {
        return originPrice - 50;
    }
    return originPrice;
}

//以上便是策略模式，其实就是为了省略一些复杂的逻辑处理
//通过一种算法的方式，实现逻辑与具体处理方式的分离

//方便维护，也使得代码可读性更高