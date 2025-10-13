"use strict";

console.log("My mango is to blow up💣");

// ! A
const multiply = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("The inputs must be a number");
    }
    console.log(a * b);
  } catch (error) {
    console.error(error.message);
  }
};

multiply(2, 2);

// ! B
let sponge = [
  { name: "Spongebob", age: 40 },
  { name: "Patrick", age: null },
];

const getUserAge = (obj) => {
  try {
    if (!obj.age) {
      throw new Error("There is no age in this object.");
    }
    console.log(obj.age);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Done checking user");
  }
};

getUserAge(sponge[0]);
