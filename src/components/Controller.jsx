import React, { useEffect, useMemo, useState } from "react";
import HeadBar from "./HeadBar";
import Editor from "./Editor";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";

function Controller() {
  const [theme, setTheme] = useState(xcodeDark);
  const [lang, setLang] = useState("cpp");

  const themeMap = useMemo(() => {
    console.log("theme map 1 created");
    return new Map([
      [sublime, "Sublime"],
      [androidstudio, "AndroidStudio"],
      [dracula, "Dracula"],
      [xcodeLight, "XCodeLight"],
      [xcodeDark, "XCodeDark"],
    ]);
  }, []);

  const themeMap2 = useMemo(() => {
    console.log("theme map 2 created");
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
        <Editor themes={theme} lang={lang} classN="maineditor" />
        <div className="inout">
          <div className="input">
            <div className="ed1">INPUT</div>
            <Editor themes={theme} classN="ed2" lang="textile" />
          </div>
          <div className="output">
            <div className="ed3">OUTPUT</div>
            <Editor themes={theme} classN="ed4" lang="textile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controller;
