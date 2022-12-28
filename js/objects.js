var date = new Date();

date.setHours(10);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

var arr = [5, 90, 6, 3, 8];
console.log(arr.length);
console.log(arr.join(", "));
console.log(arr.sort());
console.log(arr.reverse().join(", "));

var stroka = arr.reverse().join(", ");
console.log(stroka.split(", "));
class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }

  info() {
    console.log("Человек: " + this.name + ". Возраст: " + this.age);
  }
}

var alex = new Person("Alex" , 25 , true);
var bob = new Person("Bob", 45 , false);

alex.name = "Alexander";
alex.info();
bob.info();
// console.log(alex.name);
// console.log(bob.name);
