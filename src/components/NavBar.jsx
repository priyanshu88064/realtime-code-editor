import React from "react";

function NavBar() {
  return (
    <ul className="NavBar">
      <li>
        <a className="active" href="#">
          Home
        </a>
      </li>
      <li>
        <a href="#">Create Room</a>
      </li>
      <li>
        <a href="#">Join Room</a>
      </li>
    </ul>
  );
}

export default NavBar;
