import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { sublime } from "@uiw/codemirror-theme-sublime";

function Editor(props) {
  return (
    <div className="editor">
      <CodeMirror
        className="maineditor"
        style={{ fontSize: props.fontSize }}
        value={props.code}
        theme={props.theme || sublime}
        extensions={[loadLanguage("c")]}
        height="100%"
      />
      <div className="inout">
        <div className="input">
          <div className="ed1">INPUT</div>
          <CodeMirror
            className="ed2"
            style={{ fontSize: props.fontSize }}
            value=""
            theme={props.theme || sublime}
            height="100%"
          />
        </div>

        <div className="output">
          <div className="ed3">OUTPUT</div>
          <CodeMirror
            className="ed4"
            style={{ fontSize: props.fontSize }}
            value=""
            theme={props.theme || sublime}
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
