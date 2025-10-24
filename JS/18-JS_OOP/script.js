console.log("Hello, World!");

// ! A
// * 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Greetings from ${this.name}`);
  }
}
// * 2
const david = new Person("David", 40);
const beth = new Person("Beth", 30);
david.greet();
beth.greet();

// ! B
// * 1
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    const total = amount + this.balance;
    console.log(
      `You deposited $${amount} into your account. Your total balance is now $${total}.`
    );
  }
  // * 2
  withdraw(amount) {
    const total = this.balance - amount;

    if (this.balance <= 0) {
      console.log(
        `Your bank account is empty. You can NOT withdraw any money.`
      );
    } else if (amount > this.balance) {
      console.log(
        `Your balance: $${this.balance}. Withdrawal amount: $${amount}. You can NOT withdraw more money than the balance present in your account.`
      );
    } else {
      console.log(
        `You have withdrawn $${amount} from your account. Remaining balance in your account $${total}.`
      );
    }
  }
}

const brad = new BankAccount("brad", 1000);
brad.deposit(230);
brad.withdraw(50);

const animals = [];
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} makes the sound ${this.sound}.`);
  }
}

const dog = new Animal("dog", "woof");
animals.push(dog);
const cat = new Animal("cat", "meow");
animals.push(cat);
const bird = new Animal("bird", "chirp");
animals.push(bird);

animals.forEach((animal) => animal.makeSound());
