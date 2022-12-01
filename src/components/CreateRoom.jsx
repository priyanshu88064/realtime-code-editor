import React from "react";
import { Link } from "react-router-dom";
import { v4 as rand } from "uuid";

function CreateRoom({ setUserName }) {
  return (
    <div className="create-room">
      <input
        className="mt-1 form-control"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Link to={"/editor/" + rand()}>
        <button className="mt-2 btn btn-primary">Create a New Room</button>
      </Link>
    </div>
  );
}

export default CreateRoom;
