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
