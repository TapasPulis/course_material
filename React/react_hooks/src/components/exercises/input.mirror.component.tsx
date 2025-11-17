import React from "react";

const InputMirrorComponent = () => {
  const [text, setText] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed {text}</p>
    </div>
  );
};

export default InputMirrorComponent;
