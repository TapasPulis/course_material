import React, { useEffect } from "react";

const InputFocusComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };
  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div>
      <h2>Input focus with REF</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default InputFocusComponent;
