import React, { useState } from "react";

type buttonProps = {
  handleClick: () => void;
  text: string;
};

const CustomButton: React.FC<buttonProps> = ({ handleClick, text }) => {
  const [isVisible, setIsVisibile] = useState<boolean>(true);
  function handleVisibility() {
    setIsVisibile(!isVisible);
  }

  return (
    <div>
      <button onClick={handleVisibility}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>I am visible</p>}
    </div>
  );
};

export default CustomButton;
