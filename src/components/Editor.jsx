import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

function Editor({ themes, lang, classN }) {
  return (
    <CodeMirror
      className={classN}
      style={{ fontSize: "15px" }}
      value=""
      theme={themes}
      extensions={[loadLanguage(lang)]}
      height="100%"
    />
  );
}

export default Editor;
