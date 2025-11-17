import React from "react";

const AgeCounterComponent = () => {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<number>(0);

  return (
    <div>
      <h2>Example - string & number - useState - Age Counter</h2>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Set Age
      </button>
      <br />
      {name && age > 0 && (
        <p>
          Hello, my name is {name}, I am {age} years old.
        </p>
      )}
    </div>
  );
};

export default AgeCounterComponent;
