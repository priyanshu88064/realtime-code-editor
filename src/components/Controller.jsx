import React, { useMemo, useState, useEffect } from "react";
import HeadBar from "./HeadBar";
import Editor from "./Editor";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { useParams } from "react-router-dom";
import skt from "../sockets";

function Controller({ userName, setAllUsers }) {
  const [theme, setTheme] = useState(xcodeDark);
  const [lang, setLang] = useState("cpp");
  const [editorData, setEditorData] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    const socket = skt();

    socket.emit("join", roomId, userName);

    socket.on("newjoin", (newUser, allUsers) => {
      setAllUsers(allUsers);
    });

    socket.on("leave", (user) => {
      setAllUsers((prev) => {
        return [...prev].filter((name) => name !== user);
      });
    });

    return () => {
      socket.disconnect();
      socket.off("newjoin");
      socket.off("leave");
    };
  }, []);

  // function handleChange(data) {
  //   if (data === editorData) return;
  //   socket.emit("sendEditorData", data, roomId);
  // }

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
          // setEditorData={setEditorData}
          // handleChange={handleChange}
          // editorData={editorData}
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
