import Counter from "./components/counter.component";
import MyInput from "./components/input.component";
import LikeButtonComponent from "./components/like.button.component";
import AgeCounterComponent from "./components/age.counter.component";
import ContactFormComponent from "./components/contact.form.component";
import ListComponent from "./components/list.component";
import GreetingMessageComponent from "./components/exercises/greeting.message.component";
import InputMirrorComponent from "./components/exercises/input.mirror.component";
import CounterComponent from "./components/exercises/counter.component";
import ToggleComponent from "./components/exercises/toggle.component";
import ProfileCardComponent from "./components/exercises/profile.card.component";

function App() {
  return (
    <div className="">
      <h1>State in React</h1>
      <hr />
      <Counter />
      <hr />
      <MyInput />
      <hr />
      <LikeButtonComponent />
      <hr />
      <AgeCounterComponent />
      <hr />
      <ContactFormComponent />
      <hr />
      <ListComponent />
      <hr />
      <GreetingMessageComponent />
      <hr />
      <InputMirrorComponent />
      <hr />
      <CounterComponent />
      <hr />
      <ToggleComponent />
      <hr />
      <ProfileCardComponent />
    </div>
  );
}

export default App;
