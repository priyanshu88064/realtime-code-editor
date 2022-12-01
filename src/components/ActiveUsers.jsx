import React, { useState } from "react";
import { v4 as rand } from "uuid";

function ActiveUsers({ allUsers }) {
  return (
    <div className="active-users">
      <div className="user-box-header">Connected</div>
      <div className="users-name-box">
        {/* <div className="user-name">Priyanshu</div> */}
        {/* <div className="user-name">Priyanshu</div> */}
        {allUsers.map((item) => (
          <div className="user-name" key={rand()}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveUsers;
