import React, { useState, useEffect } from "react";
import Controller from "./Controller";
import ActiveUsers from "./ActiveUsers";
import NameBar from "./NameBar";

function EditorHead({ userName }) {
  const [allUsers, setAllUsers] = useState([userName]);

  return (
    <>
      <NameBar />
      <div className="chota-wrapper">
        <ActiveUsers allUsers={allUsers} />
        <Controller userName={userName} setAllUsers={setAllUsers} />
      </div>
    </>
  );
}
export default EditorHead;
