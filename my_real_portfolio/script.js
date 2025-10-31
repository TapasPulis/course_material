// * Welcome message

const myName = "Samragya Gurung";
const myRole = "Fullstack Developer";

const introText = document.getElementById("introText");

introText.innerText = `My name is ${myName}. I am a ${myRole}. Welcome to my Portfolio!`;

// * Skills list
const skillsList = document.getElementById("skillsList");

const mySkills = [
  { skill: "HTML", Proficiency: "Intermediate" },
  { skill: "CSS", Proficiency: "Intermediate" },
  { skill: "JavaScript", Proficiency: "Beginner" },
  { skill: "Teamwork", Proficiency: "Professional" },
  { skill: "Communication", Proficiency: "Professional" },
];

for (const mySkill of mySkills) {
  const listItem = document.createElement("li");
  listItem.textContent = `${mySkill.skill} - ${mySkill.Proficiency}`;
  skillsList.appendChild(listItem);
}

// * About Me
const aboutMeText = document.getElementById("aboutMeText");

const aboutMe = {
  name: "Samragya Gurung",
  age: 19,
  skills: ["HTML", "CSS", "JavaScript"],
  location: "Stockholm",
};

const personalInfo = function () {
  for (const info in aboutMe) {
    return (aboutMeText.innerText += `Hi I'm ${
      aboutMe.name
    }. Currently residing in ${aboutMe.location}, I am a ${
      aboutMe.age
    } year old passionate and dedicated aspiring web developer with a strong interest in building dynamic, responsive, and user-focused websites and applications. My area of work is ${aboutMe.skills.join(
      ", "
    )}.`);
  }
};
personalInfo();

// * Contact Form

const contactForm = document.getElementById("contactForm");
const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const formMsg = document.getElementById("formMsg");
const contactFormSubmit = document.getElementById("contactFormSubmit");
const submitFeedback = document.getElementById("submitFeedback");

contactFormSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (formName.value === "" || formEmail.value === "" || formMsg.value === "") {
    submitFeedback.textContent = "Please fill in the required information.";
    submitFeedback.style.color = "red";
    return;
  }
  submitFeedback.textContent = `Thank you for your message ${formName.value}! I will get back to you soon.`;

  setTimeout(() => {
    submitFeedback.textContent = "";
    submitFeedback.style.color = "black";
    contactForm.reset();
  }, 3000);
});

// * Dark mode toggle
const darkModeBtn = document.querySelector("#dark-mode-btn");

// ! Preferred mode saves when reloading page
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// ! Button to toggle dark and light mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// * Scroll to top button
const toTopBtn = document.querySelector("#to-top-btn");

// ! When scrolling down 200px from the top of the document, show the button. documentElement refers to the <html> element inside the DOM.
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

// ! When the user clicks on the button, scroll to the top of the document
toTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// * Mobile menu toggle navbar
const mobileMenu = document.querySelector("#mobile-menu");
const myLinks = document.querySelector("#myLinks");

/* When the user clicks the mobile menu toggle button the open class is toggled to 
the myLinks div, basically allowing the user to open the mobile menu with the help of css */
mobileMenu.addEventListener("click", () => {
  myLinks.classList.toggle("open");
});

// * Dynamically rendering project section
// ! This is an array of objects containing all the projects containing image, alt text and link(this one for the future)
const projects = [
  {
    image: "./assets/project_placeholder.jpg",
    alt: "This is a placeholder image for my projects",
    link: "#",
  },
  {
    image: "./assets/second_project_placeholder.jpg",
    alt: "This is a placeholder image for my projects",
    link: "#",
  },
  {
    image: "./assets/project_placeholder.jpg",
    alt: "This is a placeholder image for my projects",
    link: "#",
  },
  {
    image: "./assets/second_project_placeholder.jpg",
    alt: "This is a placeholder image for my projects",
    link: "#",
  },
  {
    image: "./assets/project_placeholder.jpg",
    alt: "This is a placeholder image for my projects",
    link: "#",
  },
  {
    image: "./assets/second_project_placeholder.jpg",
    alt: "This is a placeholder image for my projects",
    link: "#",
  },
];

const projectsContainer = document.querySelector("#projects-container");

// ! This loops through the projects array
projects.forEach((project) => {
  const projectDiv = document.createElement("div"); // This div will be created once for every project since this is a loop. It will contain the projects. So the first in the first iteration of the loop the div will contain the first project. Then in the second iteration a new div is created which contains project 2 and so on...
  projectDiv.classList.add("project"); // This adds the project class that exists in CSS to the div so that the styling can be applied. NOTE: This class and the element in this loop are both called "project" but they are two different things. That's why the class has "" around it.

  // Here I access the html of the div and create a button and an img inside the button and use the image and alt values from my projects array
  projectDiv.innerHTML = `
    <button>
      <img src="${project.image}" alt="${project.alt}" />
    </button>
  `;

  projectsContainer.appendChild(projectDiv); // This appends the div to my projects-container so that it appears on my site
});
