"use strict";
console.log("Hello, World!");

const quotes = document.getElementById("quotes");
const btnQuote = document.getElementById("btnQuote");
const fetchQuote = async () => {
  try {
    const res = await fetch("http://api.quotable.io/random");
    const data = await res.json();
    console.log(data);
    quotes.textContent = `${data.content} - ${data.author}`;
  } catch (error) {
    console.error(error);
  }
};
btnQuote.addEventListener("click", fetchQuote);
