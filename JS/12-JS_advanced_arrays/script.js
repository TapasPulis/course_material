// * 1

const favouriteMovies = [
  "PowerPuff Girls",
  "Spider-Man",
  "Spider-Man 2",
  "Spider-Man 3",
  "Spider-Man: Into the Spider-Verse",
];

console.log(favouriteMovies[1]);
favouriteMovies.push("Spider-Man: Across the Spider-Verse");
console.log(favouriteMovies);
favouriteMovies.shift();
console.log(favouriteMovies);

// * 2
const numbers = [1, 2, 3, 4, 5];

const numbersSquared = numbers.map((n) => n ** 2);
console.log(numbersSquared);

const numbersSquaredOdd = numbersSquared.filter((n) => n % 2 === 1);
console.log(numbersSquaredOdd);

// * 3
const ticTacToe = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(ticTacToe[1][1]);

const totals = [10, 20, 30, 40, 50];
const totalAmount = totals.reduce((total, nextAmount) => total + nextAmount, 0);
console.log(totalAmount);
