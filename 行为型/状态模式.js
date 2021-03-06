//状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。
//在策略模式的基础上，添加了状态，即她会关注处理时的状态改变
//状态模式中的行为函数，首先是和状态主体之间存在着关联，由状态主体把它们串在一起；
//另一方面，正因为关联着同样的一个（或一类）主体，所以不同状态对应的行为函数可能并不会特别割裂。

// 状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。
//把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。