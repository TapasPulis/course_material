import React from "react";

const ToggleComponent = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsDark(!isDark);
  };

  if (!isDark) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "black";
  }
  return (
    <div>
      <button onClick={handleClick}>Change theme</button>
    </div>
  );
};

export default ToggleComponent;
