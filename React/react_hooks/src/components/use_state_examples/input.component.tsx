import React, { useState } from "react";

const MyInput = () => {
  const initialText: string = "hello";
  const [text, setText] = useState<string>(initialText);
  console.log(text);

  function handlechange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Example - string with useState / Single Input</h2>
      <input type="text" value={text} onChange={handlechange} />
      <p>You typed {text}</p>
      <button onClick={() => setText(initialText)}>RESET</button>
    </div>
  );
};

export default MyInput;
