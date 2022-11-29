import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

function Editor({ themes, lang, classN, readOnly }) {
  return (
    <CodeMirror
      className={classN}
      style={{ fontSize: "13px" }}
      value=""
      theme={themes}
      extensions={[loadLanguage(lang)]}
      height="100%"
      readOnly={readOnly}
    />
  );
}

export default Editor;
