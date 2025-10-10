"use strict";
// 1
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const greetLater = async () => {
  await wait(3000);
  console.log(`Hello from my async world!`);
};
greetLater();

//2
const fetchTodo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("TODO: ", data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchTodo();

//3
const getUsersAndPosts = async () => {
  try {
    const [usersRES, postsRES] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);
    if (!usersRES.ok || !postsRES.ok) {
      throw new Error(`Users: ${usersRES.status} Posts: ${postsRES.status}`);
    }
    const [users, posts] = await Promise.all([
      usersRES.json(),
      postsRES.json(),
    ]);
    console.log("POSTS: ", posts);
    console.log("USERS: ", users);
  } catch (error) {
    console.error(error.message);
  }
};
getUsersAndPosts();

//4
const fetchWithRetry = async (
  url,
  options = {},
  retries = 3,
  backOffMs = 500
) => {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP: ${res.status}`);
      return res;
    } catch (error) {
      if (attempt === retries) throw error;
      await wait(backOffMs * (attempt + 1));
      attempt++;
    }
  }
};

const demoRetry = async () => {
  try {
    const res = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await res.json();
    console.log(`Success after retry number: `, data);
  } catch (error) {
    console.log(error.message);
  }
};
demoRetry();

//! 5
async function fetchPostsAndFirstComments() {
  try {
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!postsRes.ok) throw new Error(`HTTP ${postsRes.status}`);
    const posts = await postsRes.json();
    const firstPost = posts[0];

    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    if (!commentsRes.ok) throw new Error(`HTTP ${commentsRes.status}`);
    const comments = await commentsRes.json();

    console.log("First post:", firstPost);
    console.log("Comments for first post:", comments.slice(0, 3));
  } catch (err) {
    console.error("Failed to fetch posts/comments:", err.message);
  }
}

fetchPostsAndFirstComments();
// ! 6
const performance = window.performance || { now: () => Data.now() };
const measure = async (label, fn) => {
  const t0 = performance.now();
  const result = await fn();
  const t1 = performance.now();
  console.log(`${label}: ${(t1 - t0).toFixed(0)} ms`);
  return result;
};

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

const sequentialFetch = async () => {
  const results = [];

  for (const url of urls) {
    const res = await fetch(url);
    results.push(await res.json());
  }

  return results;
};

const paralellFetch = async () => {
  const responses = await Promise.all(urls.map((u) => fetch(u)));
  return Promise.all(responses.map((r) => r.json()));
};

(async function runComparison() {
  await measure("Sequential", sequentialFetch);
  await measure("Parallel", paralellFetch);
})();
