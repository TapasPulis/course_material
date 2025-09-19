// ! exercise 1

// * uppgift 1
let colors = ["red", "white", "blue"];

console.log(`First color: ${colors[0]}. Last color: ${colors[2]}`);

// * uppgift 2
colors.push("green");
console.log(colors);

// * uppgift 3
colors.shift();
console.log(colors);

// ! exercise 2

// * uppgift 1
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 99);
console.log(numbers);

// * uppgift 2
for (const number of numbers) {
  console.log(number * 2);
}

// ! exercise 3
let shoppingCart = ["Apples", "Carrots", "Banana", "Milk", "Sofa"];
shoppingCart.unshift("Bread");
shoppingCart.push("Bed");
shoppingCart.splice(2, 1);
console.log(shoppingCart.includes("Milk"));
console.log(shoppingCart);
