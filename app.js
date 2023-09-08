//c1
// function heavyLogic(a, b) {
//   return a + b;
// }

//c2

// const heavyLogic = (a, b) => {
//   return a + b;
// };

//ex1
// logger();

// function logger() {
//   console.log("Mindx technology school!");
// }
// logger();

// const logger = () => {
//   console.log("Mindx technology school!");
// };

//ex2

// const person = {
//   name: "MindX",
//   age: 20,
//   sayHello: () => {
//     console.log(this);
//     console.log("say hello" + " " + this.name);
//   },
//   //   sayHello: function () {
//   //     console.log(this);
//   //     console.log("say hello" + " " + this.name);
//   //   },
// };

// person.sayHello();

// const name = "MindX";
// const address = "Hanoi";

// // console.log("Hello my name is " + name + " address : " + address);

// console.log(`Hello my name is ${name}, address : ${address}`);

// import logger from "./helper.js";

// logger("My message");
// // console.log(sum(2, 3));

// const person = {
//   name: "MindX",
//   age: 18,
//   address: "HN",
//   postCode: "1111",
//   rich: false,
//   house: false,
//   car: false,
//   girlFriend: false,
// };

// // const anotherPerson = {
// //   age: person.age,
// //   address: person.address,
// // };

// const { name, ...rest } = person;

// console.log(name);
// console.log(rest);

// const nums1 = 10;
// const nums2 = 10;

// console.log(nums1 === nums2); //false

//magic 1

// const nums1 = 10; //10
// const nums2 = 10; //10

// console.log(nums1 === nums2); //true

// const person = {
//   name: "Mindx",
//   age: 19,
// };//0xyz.....
// const person2 = {
//   name: "Mindx",
//   age: 19,
// };//12dsdsdd....
// console.log(person === person2); //false

//magic 2

// const person = {
//   name: "Mindx",
//   age: 19,
// }; //abc

// const duplicatedPerson = { ...person }; //xyz

// duplicatedPerson.name = "Mindx technology school";

// console.log(duplicatedPerson);

// console.log(person);

// // nguyen thuy
// let nums1 = 10; //10
// let duplicatedNums1 = nums1; //10

// duplicatedNums1 = 10000;
// console.log(duplicatedNums1); //10000

// console.log(nums1); //10

// const nums1 = [1, 3]; //abc

// const nums2 = [...nums1]; //xyz

// nums2.push(4);

// console.log(nums2); //[1,3,4]
// console.log(nums1); //[1,3]

// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

//higher order function? tự timf hiểu cho mình

//forEeach : đơn giản là lăpj qua các phần tử;

// arr.forEach((item, index) => console.log(item, index));

//filter  -> trả ra 1  mảng mới ,chứa những phần tử thoả mãn với điều kiên;

// const filterArr = arr.filter((item, index) => item > 4);

// console.log(filterArr);

//map : trả ra 1 mảng mới -> dựa vào cái tính chất;
// const newArr = arr.map((item, index) => item * 3);

// console.log(newArr);

//every : trả ra boolean dựa vào các phẩn tử có thoả mãn hay k;

// const result = arr.every((item, index) => item > 0);

//some : trả ra boolean dựa vào chỉ cần 1 phần tử thoả mãn;

// const result = arr.some((item, index) => item > 300);

//find : trar ra 1 phan tu dau tien thoa man

// const result = arr.find((item) => item > 3);

// console.log(result);

//reduce

// const arr = [1, 2, 3, 4, 5, 6];

// const result = arr.reduce(
//   (previousValue, currentItem) => previousValue + currentItem,
//   0
// );

// console.log(result);

// const arr = [
//   ["name", "MindX"],
//   ["age", 18],
//   ["address", "Ha noi"],
// ];

// {
//     name : "MindX",
//     age : 18,
//     address : 'Ha noi'
// }

// const result = arr.reduce(
//   (previousValue, currentItem) => ({
//     ...previousValue,
//     [currentItem[0]]: currentItem[1],
//   }),
//   {}
// );

// console.log(result);

// const person = {
//   name: "MindX",
// };

// // person.age = "19";

// console.log({ ...person, age: "19" });

//destructing

const person = {
  name: "MindX",
  age: 18,
};

const { name, age } = person;

console.log(name);

console.log(age);
