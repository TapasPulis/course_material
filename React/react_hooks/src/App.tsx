import AdminMessage from "./components/greeting_user_exercise/admin.message";
import GreetingUser from "./components/greeting_user_exercise/greeting.user";
import StatusLight from "./components/greeting_user_exercise/status.light";

function App() {
  const isLoggedIn = false;
  let isOnline = true;
  let isAdmin = true;
  const username = "Big bro";

  if (!isLoggedIn) {
    isOnline = false;
    isAdmin = false;
  }

  return (
    <div className="">
      <h1>State in React</h1>
      <GreetingUser isLoggedIn={isLoggedIn} />
      <StatusLight isOnline={isOnline} />
      <AdminMessage username={username} isAdmin={isAdmin} />
    </div>
  );
}

export default App;
