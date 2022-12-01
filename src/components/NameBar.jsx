import React from "react";
import { useParams } from "react-router-dom";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

function NameBar() {
  const { roomId } = useParams();

  function copy() {
    navigator.clipboard.writeText(roomId);
    Store.addNotification({
      title: "Successfully Copied!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated animate__bounceIn"],
      animationOut: ["animate__animated animate__zoomOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  }

  return (
    <div className="NameBar">
      <span>Priyanshu's Room</span>
      <button className="btn btn-primary custom-btn" onClick={copy}>
        Copy Room Link
      </button>
    </div>
  );
}

export default NameBar;
