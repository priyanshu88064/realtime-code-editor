import React from "react";
import { v4 as rand } from "uuid";
import { Link } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import EnterRoom from "./EnterRoom";

function Head() {
  return (
    <div className="home">
      <div className="mb-5 sec">
        <h2>Collaborative Code Editor</h2>
        <div>
          A Realtime code editor with support of multiple languages and rich
          themes.
        </div>
      </div>
      <EnterRoom />
      <div className="mt-2 or">OR</div>
      <CreateRoom />
    </div>
  );
}

export default Head;
