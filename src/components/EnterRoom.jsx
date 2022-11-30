import React from "react";

function EnterRoom() {
  return (
    <div className="enter-room">
      <input className="form-control" placeholder="Enter Room Code" />
      <input className="mt-1 form-control" placeholder="Enter Your Name" />
      <button className="btn btn-primary">Join</button>
    </div>
  );
}

export default EnterRoom;
