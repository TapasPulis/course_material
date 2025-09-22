console.log("Hello, World!");
const car = {
  maker: "Volvo",
  model: "V60",
  horsepower: 360,
  fuel: "Diesel",
  year: 2018,
};

console.log(car.maker);

const person = new Option();
person.name = "David";
person.age = 19;
person.profession = "Student";

console.log(person);

//* uppgift 1
const book = {
  title: "The Journey",
  author: "Alexander David",
  year: "1986",
};

book.pages = 400;
console.log(book);

const user = {
  name: "Buddy Holly",
  city: "New York",
};

console.log(`Hi, I'm ${user.name} from ${user.city}`);

//* uppgift 2
const bookObjects = [
  { title: "Harry Potter", author: "JK Rowling" },
  { title: "Stupid Trouble", author: "Lester Chester" },
  { title: "Tale of the Goofy Guy", author: "Larry Dude" },
];

console.log(bookObjects[1].title);

//* uppgift 3
const classroom = {
  teacher: "Mr Greg",
  subject: "Maths",
  students: [
    { name: "Brad", age: 17 },
    { name: "Lady", age: 19 },
    { name: "Hugh", age: 20 },
  ],
};

for (const student of classroom.students) {
  console.log(student.name);
}
