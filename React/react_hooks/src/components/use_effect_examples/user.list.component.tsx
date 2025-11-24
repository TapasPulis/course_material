import React, { useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Geo = {
  lat: number;
  lng: number;
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

const UserListComponent = () => {
  const [users, setUsers] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      const userNames = data.map((user: { name: string }) => user.name);
      setUsers(userNames);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;
