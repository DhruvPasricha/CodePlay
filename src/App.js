import React from 'react'
import Editor from './Editor'
import { useState } from 'react'
import ColumnResizer from "react-column-resizer";

export default function App() {


  const [htmlValue, setHtml] = useState("<h1>Hello World!</h1>");
  const [cssValue, setCSS] = useState(`body{
    color : red;
}`)
  const [jsValue, setJs] = useState(`console.log("Hello World")`);


  return (
    <center>
      <div className="pane top-pane">
        <table>
          <tbody>
            <tr>
              <Editor
                displayName="HTML"
                lang="xml"
                value={htmlValue}
                setValue={setHtml}

              />

              <ColumnResizer
                className="columnResizer resizer"
                minWidth={0}

              />

              <Editor
                displayName="CSS"
                lang="css"
                value={cssValue}
                setValue={setCSS}

              />


              <ColumnResizer
                className="columnResizer resizer"
                minWidth={0}

              />

              <Editor
                displayName="JS"
                lang="javascript"
                value={jsValue}
                setValue={setJs}

              />

            </tr>

          </tbody>
        </table>
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%">
        </iframe>
      </div>
    </center>
  )
}
