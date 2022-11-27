import React from "react";
import HeadBar from "./HeadBar";
import Editor from "./Editor";

function Controller(props) {
  return (
    <div className="controller">
      <HeadBar />
      <Editor />
    </div>
  );
}

export default Controller;
