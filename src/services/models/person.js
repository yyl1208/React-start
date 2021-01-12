class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //一般方法  在对象原型中,供实例使用,    类中方法 局部开启严格模式
  speak() {}
}

class Student extends Person {
  constructor(name, age, grade) {
    // this.name = name;
    // this.age = age;
    super(name, age);
    this.grade = grade;
  }

  //重写
  speak(){
    console.log(this)
  }

  study(){
      
  }
}

class car{
  
}

let S1 = new Student();
S1.speak()           //  this 实例


let x= s1.speak;
x();                 //  undefined
