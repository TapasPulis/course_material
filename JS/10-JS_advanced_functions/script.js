//* 1
const square = (x) => {
  return x * x;
};

//* 2
function doHomework(subject, callback) {
  console.log(`Finished my ${subject} homework`);
  callback();
}
function callMe() {
  console.log("Stupid");
}

doHomework("math", callMe);

//* 3
const multiply = function (a, b = 1) {
  return a * b;
};

console.log(multiply(2));

//* 4
const maxNumber = (...nums) => {
  return Math.max(...nums);
};

console.log(maxNumber(1, 10, 5));

//* 5
const fruits = ["apple", "pineapple", "watermelon"];
const newFruits = [...fruits, "banana", "strawberry"];

console.log(fruits);
console.log(newFruits);
