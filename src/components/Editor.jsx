import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

function Editor({
  themes,
  lang,
  classN,
  readOnly,
  setEditorData,
  handleChange,
  editorData,
}) {
  if (editorData == null) {
    editorData = "";
  }
  return (
    <CodeMirror
      className={classN}
      style={{ fontSize: "13px" }}
      value={editorData}
      theme={themes}
      extensions={[loadLanguage(lang)]}
      height="100%"
      readOnly={readOnly}
      onChange={(value) => {
        if (setEditorData !== null) {
          setEditorData(value);
        }
        handleChange(value);
      }}
    />
  );
}

export default Editor;
