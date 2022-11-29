import React, { useState } from "react";

function ActiveUsers() {
  const usersArr = ["Priyanshu", "Naman", "Zalak", "Utkarsh", "Rohit"];

  const [users, setUsers] = useState(usersArr);

  return (
    <div className="active-users">
      <div className="user-box-header">Connected</div>
      <div className="users-name-box">
        <div className="user-name">Priyanshu</div>
        <div className="user-name">Priyanshu</div>
      </div>
    </div>
  );
}

export default ActiveUsers;
