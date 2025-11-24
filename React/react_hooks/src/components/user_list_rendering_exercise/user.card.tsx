import React from "react";

type User = {
  id: number;
  name: string;
  age: number;
};
const users: User[] = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Alice Johnson", age: 28 },
];

const UserCard = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} : {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCard;
