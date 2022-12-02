import React, { useMemo, useState, useEffect, useRef } from "react";
import HeadBar from "./HeadBar";
import Editor from "./Editor";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { useParams } from "react-router-dom";
import skt from "../sockets";
import Notify from "./notification";

function Controller({ userName, setAllUsers }) {
  const [theme, setTheme] = useState(xcodeDark);
  const [lang, setLang] = useState("cpp");
  const [editorData, setEditorData] = useState("");
  const [inputData, setInputData] = useState("");
  const { roomId } = useParams();
  const socket = useRef(null);

  useEffect(() => {
    socket.current = skt();

    socket.current.emit("join", roomId, userName);

    socket.current.on("codechange", (c) => {
      setEditorData(c);
    });
    socket.current.on("inputchange", (c) => {
      setInputData(c);
    });
    socket.current.on("langchange", (lang, user) => {
      if (user) {
        Notify(user + " has Changed the Language", "default");
      }
      setLang(lang);
    });

    socket.current.on("leave", (user) => {
      Notify(user + " has Left the Room.", "danger");
      setAllUsers((prev) => {
        return [...prev].filter((name) => name !== user);
      });
    });

    return () => {
      socket.current.disconnect();
      socket.current.off("newjoin");
      socket.current.off("leave");
      socket.current.off("codechange");
      socket.current.off("inputchange");
    };
  }, []);

  useEffect(() => {
    socket.current.off("newjoin");

    socket.current.on("newjoin", (newUser, allUsers, id) => {
      setAllUsers(allUsers);
      if (userName !== newUser) {
        Notify(newUser + " Joined the Room.", "success");
        socket.current.emit("sync", editorData, inputData, lang, id);
      }
    });
  }, [editorData, inputData, lang]);

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
        socket={socket}
        roomId={roomId}
        userName={userName}
        editorData={editorData}
      />

      <div className="editor">
        <Editor
          themes={theme}
          lang={lang}
          classN="maineditor"
          readOnly={false}
          socket={socket}
          setEditorData={setEditorData}
          editorData={editorData}
          setInputData={null}
          inputData={inputData}
          roomId={roomId}
        />
        <div className="inout">
          <div className="input">
            <div className="ed1">INPUT</div>
            <Editor
              themes={theme}
              classN="ed2"
              lang="textile"
              readOnly={false}
              socket={socket}
              setEditorData={null}
              editorData={editorData}
              setInputData={setInputData}
              inputData={inputData}
              roomId={roomId}
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
