import React from "react";

type UserProps = {
  username: string;
  isAdmin: boolean;
};

const AdminMessage: React.FC<UserProps> = ({ username, isAdmin }) => {
  return isAdmin && <p>Hi {username}. You have admin access.</p>;
};

export default AdminMessage;
