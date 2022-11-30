import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="home">
      <div className="sec">
        <h2>Collaborative Code Editor</h2>
        <div>
          A Realtime code editor with support of multiple languages and rich
          themes.
        </div>
      </div>
      <div className="enter-room">
        <input className="form-control" placeholder="Enter Room Code" />
        <button className="btn btn-primary">Join</button>
      </div>
      <div className="or">OR</div>
      <Link to="/editor">
        <div className="create-room">
          <button className="btn btn-primary">Create a New Room</button>
        </div>
      </Link>
    </div>
  );
}

export default Head;
