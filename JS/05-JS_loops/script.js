console.log("Hello, World!");

// * 1

for (let i = 1; i <= 10; i++) {
  console.log(`The number is ${i}`);
}

// * 2

let count = 10;

while (count >= 1) {
  console.log(`The count is ${count}`);
  count--;
}

// * 3

let k = 1;
let sum = null;

do {
  sum = k + sum;
  console.log(sum);
  k++;
} while (sum <= 20);

// * 4

const classmates = ["Bob", "Laura", "Leland", "Coop", "Mr. C"];

for (const classmate of classmates) {
  console.log(classmate);
}
