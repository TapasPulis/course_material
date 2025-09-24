// * task 1
const box = document.getElementById("box");

box.style.width = "300px";
box.style.height = "300px";
box.style.border = "2px solid black";

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "white";
});

// * task 2
const myForm = document.getElementById("myForm");
const input = document.getElementById("input");
const button = document.getElementById("button");

myForm.addEventListener("input", () => {
  console.log(input.value.length);
});

// * task 3
button.addEventListener("click", (event) => {
  if (input.value.length < 1) {
    event.preventDefault();
    alert("Please type something in the box.");
  }
});

// * task 4
const scroller = document.getElementById("scroller");
scroller.style.position = "fixed";
scroller.style.backgroundColor = "blue";
scroller.style.height = "10px";
scroller.style.border = "1px solid black";

window.addEventListener("scroll", () => {
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  const percentage = (window.scrollY / maxHeight) * 100;
  scroller.style.width = percentage + "%";
});

// * task 5
const size = document.getElementById("size");

window.addEventListener("resize", () => {
  if (window.innerWidth < 600) {
    size.innerText = "The screen is less than 600px";
  } else {
    size.innerText = "The screen is more than 600px";
  }
});
