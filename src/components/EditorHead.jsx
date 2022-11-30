import React from "react";
import Controller from "./Controller";
import ActiveUsers from "./ActiveUsers";
import NameBar from "./NameBar";

function EditorHead() {
  return (
    <>
      <NameBar />
      <div className="chota-wrapper">
        <ActiveUsers />
        <Controller />
      </div>
    </>
  );
}
export default EditorHead;
