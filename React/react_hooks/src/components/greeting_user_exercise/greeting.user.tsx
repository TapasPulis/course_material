import React from "react";

type GreetingProps = {
  isLoggedIn: boolean;
};
const GreetingUser: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
};

export default GreetingUser;
