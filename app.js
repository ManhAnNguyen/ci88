//template literal

// const name = prompt("Enter name");
// const age = prompt("Enter age");

// document.write(`My name is ${name}, age : ${age}`);

// const person = {
//   name: "age",
// };

// //3 cach them age : 18 vao person
// // person.age = 18

// // person['age'] = 18

// const newPerson = { ...person, age: 18 };

// console.log(newPerson);

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

const excludeKeyObject = (entity, key) => {
  if (!entity[key]) return `Entity doesn't has ${key}`;

  delete entity[key];

  return entity;
};

console.log(excludeKeyObject(product, "id"));

// const { id, ...rest } = product;

// console.log(rest);
