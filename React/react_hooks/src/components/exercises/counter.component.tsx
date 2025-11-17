import React from "react";

const CounterComponent = () => {
  const [num, setNum] = React.useState<number>(0);
  const increaseOnClick = () => {
    setNum(num + 1);
  };
  const decreaseOnClick = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <button onClick={increaseOnClick}>Increase</button>
      <button onClick={decreaseOnClick}>Decrease</button>
      <p>{num}</p>
    </div>
  );
};

export default CounterComponent;
