import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="container">
      <h1>Vite + React</h1>
      <CardComponent
        title="An Amazing Journey"
        description="Our journey through space and time"
        imgUrl="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg"
      />
      <CardComponent
        title="Today is the day"
        description="Come and join us"
        imgUrl="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg"
      />
      <CardComponent
        title="Tonight is the night"
        description="Let us join you"
        imgUrl="https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg"
      />
    </div>
  );
}

export default App;
