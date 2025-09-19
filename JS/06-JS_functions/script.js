function Hello(name, age) {
  return `Hello my name is ${name}. I am ${age} years old.`;
}

console.log(Hello("Goofy", 18));
console.log(Hello("Guy", 81));

// variable function

const calcBMI = function (name, height, weight) {
  return `My name is ${name}. My height is ${height}m. My weight is ${weight}kg. My BMI is ${
    weight / height ** 2
  }`;
};

console.log(calcBMI("Brudda", 1.65, 58));

// arrow function
// * First way: without curly brackets
const subtract = (a, b) => a - b;
console.log(subtract(2, 3));

// * Second way: with curly brackets
const subtract2 = (a, b) => {
  return a - b;
};
console.log(subtract2(2, 3));

// arrow function with default parameter
const calculateAge = (birthYear, currentYear = 2025) => {
  return currentYear - birthYear;
};

console.log(calculateAge(1999));

// grade uppgift
const calculateGrade = (name, score) => {
  if (score >= 90 && score <= 100) return `${name}'s grade is A.`;
  if (score >= 80 && score <= 89) return `${name}'s grade is B.`;
  if (score >= 70 && score <= 79) return `${name}'s grade is C.`;
  if (score >= 60 && score <= 69) return `${name}'s grade is D.`;
  if (score < 60 && score >= 0) return `${name}'s grade is F.`;
  if (score > 100 || score < 0) return `Invalid score for ${name}.`;
};

console.log(calculateGrade("Alice", -1));

/* function calculateGrad(name, score) {
  if (score >= 90 && score <= 100) return `${name}'s grade is A.`;
  if (score >= 80 && score <= 89) return `${name}'s grade is B.`;
  if (score >= 70 && score <= 79) return `${name}'s grade is C.`;
  if (score >= 60 && score <= 69) return `${name}'s grade is D.`;
  if (score < 60 && score >= 0) return `${name}'s grade is F.`;
  if (score > 100 || score < 0) return `Invalid score for ${name}.`;
}

console.log(calculateGrad("Alice", 96)); */
