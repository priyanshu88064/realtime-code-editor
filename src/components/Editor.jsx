import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

function Editor({
  themes,
  lang,
  classN,
  readOnly,
  socket,
  setEditorData,
  editorData,
  setInputData,
  inputData,
  roomId,
  outData,
}) {
  if (editorData === null) {
    editorData = "";
  }
  let valueC = "";
  if (outData !== null) valueC = outData;
  else if (inputData !== null) valueC = inputData;
  else valueC = editorData;

  return (
    <CodeMirror
      className={classN}
      style={{ fontSize: "15px" }}
      value={valueC}
      theme={themes}
      extensions={[loadLanguage(lang)]}
      height="100%"
      readOnly={readOnly}
      onChange={(value, inst) => {
        if (setEditorData !== null && editorData !== value) {
          setEditorData(value);
          socket.current.emit("codechange", value, roomId);
        } else if (setInputData !== null && inputData !== value) {
          setInputData(value);
          socket.current.emit("inputchange", value, roomId);
        }
      }}
    />
  );
}

export default Editor;
