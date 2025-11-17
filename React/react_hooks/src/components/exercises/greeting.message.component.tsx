import React from "react";

const GreetingMessageComponent = () => {
  const initialState = "Guest";
  const [text, setText] = React.useState<string>(initialState);

  const handleClick = () => {
    setText("Samster");
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>Hello {text}</p>
    </div>
  );
};

export default GreetingMessageComponent;
