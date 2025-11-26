import React from "react";

type buttonProps = {
  handleClick: () => void;
  text: string;
};

const CustomButton: React.FC<buttonProps> = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default CustomButton;
