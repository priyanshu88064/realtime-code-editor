import React, { useState } from "react";
import Notify from "./notification";

function HeadBar({
  currTheme,
  setThemeHandler,
  currLang,
  setLangHandler,
  socket,
  roomId,
  userName,
  editorData,
}) {
  return (
    <span className="HeadBar">
      <button type="button" className="btn btn-primary">
        Run
      </button>

      <select
        name="theme"
        id="theme"
        onChange={(e) => {
          setThemeHandler(e.target.value);
        }}
        value={currTheme}
      >
        <option value="Sublime">Sublime</option>
        <option value="AndroidStudio">Android Studio</option>
        <option value="Dracula">Dracula</option>
        <option value="XCodeLight">XCode Light</option>
        <option value="XCodeDark">XCode Dark</option>
      </select>

      <select
        name="lang"
        id="lang"
        onChange={(e) => {
          if (currLang === e.target.value) return;
          setLangHandler(e.target.value);
          socket.current.emit("langchange", e.target.value, userName, roomId);
        }}
        value={currLang}
      >
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="javascript">Javascript</option>
        <option value="java">Java</option>
        <option value="rust">Rust</option>
      </select>
      <button
        type="button"
        className="mt-1 btn btn-danger btn-sm"
        style={{ float: "right" }}
      >
        Status - Running
      </button>
      <button
        type="button"
        className="mt-1 btn btn-primary btn-sm"
        style={{ float: "right" }}
        onClick={() => {
          window.navigator.clipboard.writeText(editorData);
          Notify("Code Copied Successfully!", "success");
        }}
      >
        Copy Code
      </button>
    </span>
  );
}

export default HeadBar;
