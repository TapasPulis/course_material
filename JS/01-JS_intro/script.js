"use strict";

let name = "Samragya";
let age = 99;
let is_student = true;

console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof is_student, is_student);

age = age + 1;
console.log(age);

is_student = false;
console.log(is_student);

const introduction = `My name is ${name}, I am ${age} years old. Is it true that I am a student? ${is_student}.`;
console.log(introduction);
