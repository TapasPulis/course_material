import React from "react";

const RenderCounterComponent = () => {
  const [count, setCount] = React.useState<number>(0);
  const renderCount = React.useRef(0);

  return (
    <div>
      <h2>Render Counter</h2>
      <p>Count in state: {count}</p>
      <p>Count in ref: {renderCount.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment state count
      </button>
      <button onClick={() => renderCount.current++}>Increment REF count</button>
      <div className="">
        <h2>NOTE:</h2>
        Changing the count in state cause the component to re-render
      </div>
    </div>
  );
};

export default RenderCounterComponent;
