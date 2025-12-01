import CustomButton from "./components/custom_button_exercise/custom.button";
import AdminMessage from "./components/greeting_user_exercise/admin.message";
import GreetingUser from "./components/greeting_user_exercise/greeting.user";
import StatusLight from "./components/greeting_user_exercise/status.light";
import InteractiveList from "./components/interactive_list_exercise/interactive.list";

function App() {
  const isLoggedIn = false;
  let isOnline = true;
  let isAdmin = true;
  const username = "Big bro";

  if (!isLoggedIn) {
    isOnline = false;
    isAdmin = false;
  }

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div className="">
      <h1>State in React</h1>
      <GreetingUser isLoggedIn={isLoggedIn} />
      <StatusLight isOnline={isOnline} />
      <AdminMessage username={username} isAdmin={isAdmin} />
      <CustomButton handleClick={handleClick} text="Click me" />
      <InteractiveList />
    </div>
  );
}

export default App;
