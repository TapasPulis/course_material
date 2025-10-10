"use strict";

console.log("Hello, World!");
// Display in the DOM
// const postsList = document.getElementById("posts");
// const errorMessage = document.getElementById("error-message");
// // async stuff
// const fetchPosts = async () => {
//   try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?_limit=5"
//     );
//     if (res.status === 404) {
//       errorMessage.textContent = `Error fetching data: ${res.status} Not Found!
//         Maybe check the endpoint!`;
//       errorMessage.style.color = "red";

//       return;
//     }
//     const data = await res.json();
//     console.log(data);

//     data.forEach((item) => {
//       const listItem = document.createElement("li");
//       const postTitle = document.createElement("h2");
//       const postBody = document.createElement("p");
//       postTitle.textContent = item.title;
//       postTitle.style.fontSize = "1rem";

//       postBody.textContent = item.body;

//       listItem.appendChild(postTitle);
//       listItem.appendChild(postBody);

//       postsList.appendChild(listItem);
//       postsList.style.width = "300px";
//       postsList.style.height = "300px";
//     });
//   } catch (error) {
//     errorMessage.textContent = error.message;
//   }
// };
// // fetchPosts();

// * A
const studentJSON = '{"name":"Liam","grade":4,"passed":true}';
const parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent.name);
const stringStudent = JSON.stringify(parsedStudent);
console.log(stringStudent);

// * B
const users = document.getElementById("users");
const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);

    data.forEach((item) => {
      const dataList = document.createElement("li");
      const userName = document.createElement("h2");
      const userEmail = document.createElement("p");

      userName.textContent = item.name;
      userEmail.textContent = item.email;
      dataList.textContent = `Name: ${userName.textContent}, Email: ${userEmail.textContent}`;
      // dataList.appendChild(userName);
      // dataList.appendChild(userEmail);
      users.appendChild(dataList);
    });
  } catch (error) {
    console.error(error);
  }
};
fetchUsers();
