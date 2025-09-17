const secretNumber = 7;
const guess = 7;

if (guess < 1 || guess > 10) {
  console.log("Invalid guess");
} else if (guess === secretNumber) {
  console.log("Correct!");
} else if (guess > secretNumber) {
  console.log("Too high!");
} else if (guess < secretNumber) {
  console.log("Too low!");
}

//Discount calculator

const total_amount = 1;
let discount = null;
let final_amount = null;

if (total_amount >= 100) {
  discount = total_amount * 0.2;
  final_amount = total_amount - discount;
  console.log(
    `Original price: $${total_amount}. Your discount is 20%. Final price: $${final_amount}`
  );
} else if (total_amount >= 50 && total_amount <= 99) {
  discount = total_amount * 0.1;
  final_amount = total_amount - discount;
  console.log(
    `Original price: $${total_amount}. Your discount is 10%. Final price: $${final_amount}`
  );
} else {
  console.log(`You have no discount. Your price is $${total_amount}`);
}

//BMI calculator
const my_weight = 58;
const my_height = 1.65;
const myBMI = my_height / my_weight ** 2;

console.log(myBMI.toFixed());
