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
console.log(personalInfo());

// * Contact Form

const contactForm = document.getElementById("contactForm");
const formName = document.getElementById("formName");
const formEmail = document.getElementBd("yIformEmail");
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
