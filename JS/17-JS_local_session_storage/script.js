/* console.log("Hello, World!");

const button = document.querySelector("button");

const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
button.addEventListener("click", toggleTheme);

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme") === "dark";
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
});

const form = document.querySelector("form");
const input = document.querySelector("#username");

input.value = sessionStorage.getItem("username") || "";

input.addEventListener("input", () => {
  sessionStorage.setItem("username", input.value);
});

window.addEventListener("storage", (event) => {
  console.log("Key changed:", event.key);
  console.log("New value:", event.newValue);
});
 */

localStorage.setItem("name", "Samragya");

// * 2. CREATE ELEMENTS
const clearButton = document.createElement("button");
const themeToggle = document.createElement("button");
const para = document.createElement("p");
const input = document.createElement("input");

// * 3. ATTACH THEM TO PAGE
document.body.append(clearButton, para, themeToggle, input);

// * 4. INITIAL UI SETUP
clearButton.innerText = "Clear localStorage";
themeToggle.innerText = "Toggle Dark/Light Theme";
para.textContent = localStorage.getItem("name");
input.type = "text";
input.placeholder = "Type something to auto-save";
input.value = localStorage.getItem("autosave") || "";

// * 5. THEME TOGGLE (localStorage remembers theme)
themeToggle.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");

  // * If current theme is dark → switch to light, else → switch to dark
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // * override body class and save to localStorage
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
});
// * 6. CLEAR EVERYTHING
clearButton.addEventListener("click", () => {
  localStorage.clear();
  para.textContent = "";
  input.value = "";
});

// * 7. AUTO-SAVE TEXT INPUT
input.addEventListener("input", () => {
  localStorage.setItem("autosave", input.value);
});

// * 8. APPLY AUTO-SAVED VALUE ON RELOAD
window.addEventListener("load", () => {
  const savedValue = localStorage.getItem("autosave");
  if (savedValue) input.value = savedValue;
});

// * 9. MULTI TAB THEME SYNC AND INPUT SYNC
window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    document.body.className = e.newValue;
  }
  if (e.key === "autosave") {
    input.value = e.newValue;
  }
});

// * 10
const unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);
const listItems = document.createElement("li");
unorderedList.appendChild(listItems);
const stringTasks = JSON.stringify(tasks);
console.log(stringTasks);
