//在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求
//其实就是对对象已有功能进行一个扩展，我们也只需要关注由我们扩展出来的那部分功能

//最开始的行为
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log(this.name + " " + this.age);
    }
}

//现在有一个需求，你需要实现一个方式，让其输出 age + name

function developPerson(name, age) {
    var person = new Person(name, age);
    person.say();
    console.log(person.age + " " + person.name)
}

developPerson("kangkang", 22);