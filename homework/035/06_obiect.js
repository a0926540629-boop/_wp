
const person = {
  name: "小明",
  age: 20,
  sayHi: function () {
    console.log("你好，我是" + this.name);
  }
};
person.sayHi();
