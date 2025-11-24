import React from "react";

const PreviousValueComponent = () => {
  const [text, setText] = React.useState<string>("");
  const prevText = React.useRef<string>("Frank");

  React.useEffect(() => {
    prevText.current = text;
  }, [text]);
  return (
    <div>
      <h2>Show previous text with REF</h2>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Current: {text}</p>
      <p>OLD USERNAME: {prevText.current}</p>
    </div>
  );
};

export default PreviousValueComponent;
