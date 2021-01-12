let arr = [1, 2, 3];
let arr2 = [4, 5];
console.log(...arr); // 展开数组
arr3 = [...arr, ...arr2]; // 连接数组

function sum(...numbers) {
  // 函数中使用
  return numbers.reduce((pre, cur) => {
    return pre + cur;
  });
}

let person = { name: "John", age: "10" };
let person2 = person;

console.log(...person); // 报错
person2 = { ...person }; // 字面量复制对象

let person3 = { ...person, name: "jack" }; //  复制对象时 修改属性  / 合并
