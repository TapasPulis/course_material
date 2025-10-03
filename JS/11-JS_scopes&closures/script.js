// * 1

function makeMultiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(2));

// * 2

const counter = function () {
  let number = 0;

  return {
    increment: () => {
      number++;
      return number;
    },
    reset: () => {
      number = 0;
      return number;
    },
  };
};
const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.reset());
