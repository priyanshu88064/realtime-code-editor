import React, { useMemo, useState, useEffect } from "react";
import HeadBar from "./HeadBar";
import Editor from "./Editor";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

// const socket = io.connect("http://192.168.43.125:80"); // for locat network
const socket = io.connect("http://localhost:80");

function Controller({ userName, setAllUsers }) {
  const [theme, setTheme] = useState(xcodeDark);
  const [lang, setLang] = useState("cpp");
  const [editorData, setEditorData] = useState("");
  const { roomId } = useParams();

  useMemo(() => {
    console.log("emit new");
    return socket.emit("join", roomId, userName);
  }, []);

  useEffect(() => {
    socket.off("getEditorData");
    socket.on("getEditorData", (data) => {
      setEditorData(data);
    });

    socket.off("sync");
    socket.on("sync", (data) => {
      console.log("synced : ", data);
      setAllUsers(data);
    });

    return () => {
      console.log("closed in react");
      socket.off("getEditorData");
      socket.off("sync");
      socket.emit("leave", roomId, userName);
    };
  }, []);

  function handleChange(data) {
    if (data === editorData) return;
    socket.emit("sendEditorData", data, roomId);
  }

  const themeMap = useMemo(() => {
    return new Map([
      [sublime, "Sublime"],
      [androidstudio, "AndroidStudio"],
      [dracula, "Dracula"],
      [xcodeLight, "XCodeLight"],
      [xcodeDark, "XCodeDark"],
    ]);
  }, []);

  const themeMap2 = useMemo(() => {
    return new Map([
      ["Sublime", sublime],
      ["AndroidStudio", androidstudio],
      ["Dracula", dracula],
      ["XCodeLight", xcodeLight],
      ["XCodeDark", xcodeDark],
    ]);
  }, []);

  function setThemeHandler(theme) {
    setTheme(themeMap2.get(theme));
  }

  return (
    <div className="controller">
      <HeadBar
        currTheme={themeMap.get(theme)}
        setThemeHandler={setThemeHandler}
        currLang={lang}
        setLangHandler={setLang}
      />

      <div className="editor">
        <Editor
          themes={theme}
          lang={lang}
          classN="maineditor"
          readOnly={false}
          setEditorData={setEditorData}
          handleChange={handleChange}
          editorData={editorData}
        />
        <div className="inout">
          <div className="input">
            <div className="ed1">INPUT</div>
            <Editor
              themes={theme}
              classN="ed2"
              lang="textile"
              readOnly={false}
            />
          </div>
          <div className="output">
            <div className="ed3">OUTPUT</div>
            <Editor
              themes={theme}
              classN="ed4"
              lang="textile"
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controller;
