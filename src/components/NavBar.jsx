import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="NavBar">
      <li>
        <Link className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/">Create Room</Link>
      </li>
      <li>
        <Link to="/">Join Room</Link>
      </li>
    </ul>
  );
}

export default NavBar;
