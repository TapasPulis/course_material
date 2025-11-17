import React from "react";

type User = {
  name: string;
  age: number;
};
const ProfileCardComponent = () => {
  const [user, setUser] = React.useState({
    name: "Alice Rivers",
    age: 20,
  });
  const changeNameClick = () => {
    setUser({ ...user, name: "Dude Bro" });
  };
  const changeAgeClick = () => {
    setUser({ ...user, age: user.age + 1 });
  };
  return (
    <div>
      <button onClick={changeNameClick}>Change name</button>
      <button onClick={changeAgeClick}>Increase age</button>
      <p>
        Name: {user.name}. Age: {user.age}
      </p>
    </div>
  );
};

export default ProfileCardComponent;
