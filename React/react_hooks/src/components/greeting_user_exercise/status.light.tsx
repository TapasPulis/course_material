import React from "react";

type StatusProps = {
  isOnline: boolean;
};

const StatusLight: React.FC<StatusProps> = ({ isOnline }) => {
  return (
    <p>
      <div style={{ color: isOnline ? "green" : "red" }}>
        Status: {isOnline ? "Online" : "Offline"}
      </div>
    </p>
  );
};

export default StatusLight;
