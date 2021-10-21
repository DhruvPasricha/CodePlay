import React from 'react'
import Editor from './Editor'
import { useState } from 'react'
import ColumnResizer from "react-column-resizer";

export default function App() {


  let initialHTML = `<body>
  <div class="container">
  </div>
</body>`;
  let initialCSS = `.container {width:300px; margin:0 auto;}

  .svg15 {
    animation: blink-ani 2s steps(2, start) infinite;
    -webkit-animation: blink-ani 2s steps(2, start) infinite;
    -moz-animation: blink-ani 2s steps(2, start) infinite;
  }
  
  @-moz-keyframes blink-ani { to { visibility: hidden; } }
  @-webkit-keyframes blink-ani { to { visibility: hidden;  } }
  @keyframes blink-ani { to { visibility: hidden; }} 
  
  `;
  let initialJS = `let str = \`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  x = "0px" y = "0px" viewBox = "0 0 342.6 228" style = "enable-background:new 0 0 342.6 228;" xml: space = "preserve" >



  <style type="text/css">
      .st0 {
          fill: #000000;
      }
  </style>

  <path class="st0 svg1" d="M338.6,0H4C1.8,0,0,1.8,0,4v15.9h342.6V4C342.6,1.8,340.8,0,338.6,0z M11.4,14.4c-2.1,0-3.9-1.7-3.9-3.9
c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C15.2,12.7,13.5,14.4,11.4,14.4z M22.4,14.4c-2.1,0-3.9-1.7-3.9-3.9
c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C26.2,12.7,24.5,14.4,22.4,14.4z M33.4,14.4c-2.1,0-3.9-1.7-3.9-3.9
c0-2.1,1.7-3.9,3.9-3.9c2.1,0,3.9,1.7,3.9,3.9C37.2,12.7,35.5,14.4,33.4,14.4z" />
  <g>
      <path class="st0 svg2" d="M340.6,23.9V224c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V23.9H340.6 M342.6,21.9H0V224c0,2.2,1.8,4,4,4h334.6
  c2.2,0,4-1.8,4-4V21.9L342.6,21.9z" />
  </g>
  <g>
      <path class="st0 svg3" d="M16.4,58.5v-2.8l11.2-4.7l-11.2-4.7v-2.8L30,49.3v3.2L16.4,58.5z" />
      <path class="st0 svg4" d="M42.3,61.5V39.1H46v9.7h11.8v-9.7h3.8v22.3h-3.8v-9.3H46v9.3H42.3z" />
      <path class="st0 svg5" d="M67.5,61.5V39.1h16v3.4H71.3v6h10.9v3.4H71.3v6.2h12.6v3.4H67.5z" />
      <path class="st0 svg6" d="M88.4,61.5V39.1h3.8v19h9.7v3.4H88.4z" />
      <path class="st0 svg7" d="M105.4,61.5V39.1h3.8v19h9.7v3.4H105.4z" />
      <path class="st0 svg8" d="M120.6,50.3c0-2.1,0.5-4,1.6-5.7c1-1.7,2.5-3.1,4.3-4.1c1.8-1,3.8-1.5,6-1.5c1.6,0,3.2,0.3,4.7,0.9
  c1.5,0.6,2.7,1.4,3.8,2.4s1.9,2.2,2.5,3.6c0.6,1.4,0.9,2.9,0.9,4.4c0,1.6-0.3,3.1-0.9,4.5c-0.6,1.4-1.4,2.6-2.5,3.6
  c-1,1-2.3,1.8-3.8,2.4c-1.5,0.6-3,0.9-4.7,0.9c-2.2,0-4.2-0.5-6-1.5c-1.8-1-3.2-2.4-4.3-4.1C121.1,54.3,120.6,52.4,120.6,50.3z
   M125.5,46.3c-0.7,1.2-1.1,2.5-1.1,4c0,1.5,0.4,2.8,1.1,4c0.7,1.2,1.7,2.2,2.9,2.9c1.2,0.7,2.6,1.1,4,1.1c1.4,0,2.8-0.4,4-1.1
  c1.2-0.7,2.2-1.7,2.9-2.9c0.7-1.2,1.1-2.6,1.1-4c0-1.5-0.4-2.8-1.1-4s-1.7-2.2-2.9-2.9s-2.5-1-4-1c-1.5,0-2.8,0.3-4,1
  S126.2,45.1,125.5,46.3z" />
      <path class="st0 svg9" d="M153.7,39.1h4.1l5.4,18.2l5.4-18.1l3.7,0l5.4,18.2l5.4-18.2h3.9l-7.4,22.3h-3.9l-5.4-17.7l-5.5,17.7h-3.7
  L153.7,39.1z" />
      <path class="st0 svg10" d="M187.6,50.3c0-2.1,0.5-4,1.6-5.7c1-1.7,2.5-3.1,4.3-4.1c1.8-1,3.8-1.5,6-1.5c1.6,0,3.2,0.3,4.7,0.9
  c1.5,0.6,2.7,1.4,3.8,2.4s1.9,2.2,2.5,3.6c0.6,1.4,0.9,2.9,0.9,4.4c0,1.6-0.3,3.1-0.9,4.5c-0.6,1.4-1.4,2.6-2.5,3.6
  c-1,1-2.3,1.8-3.8,2.4c-1.5,0.6-3,0.9-4.7,0.9c-2.2,0-4.2-0.5-6-1.5c-1.8-1-3.2-2.4-4.3-4.1C188.1,54.3,187.6,52.4,187.6,50.3z
   M192.5,46.3c-0.7,1.2-1.1,2.5-1.1,4c0,1.5,0.4,2.8,1.1,4c0.7,1.2,1.7,2.2,2.9,2.9c1.2,0.7,2.6,1.1,4,1.1c1.4,0,2.8-0.4,4-1.1
  c1.2-0.7,2.2-1.7,2.9-2.9c0.7-1.2,1.1-2.6,1.1-4c0-1.5-0.4-2.8-1.1-4s-1.7-2.2-2.9-2.9s-2.5-1-4-1c-1.5,0-2.8,0.3-4,1
  S193.2,45.1,192.5,46.3z" />
      <path class="st0 svg11" d="M215.3,61.5V39.1h9.1c2.9,0,5.1,0.7,6.6,2c1.6,1.3,2.4,3.2,2.4,5.6c0,1.8-0.4,3.3-1.2,4.5
  c-0.8,1.2-1.9,2.1-3.4,2.7l5,7.5h-4.3l-4.1-6.8c-0.2,0-0.6,0-1,0H219v6.7H215.3z M219,51.4h5.3c1.7,0,3.1-0.4,4-1.1
  c0.9-0.8,1.4-1.9,1.4-3.4c0-1.4-0.5-2.5-1.4-3.3c-0.9-0.7-2.3-1.1-4-1.1H219V51.4z" />
      <path class="st0 svg12" d="M238.3,61.5V39.1h3.8v19h9.7v3.4H238.3z" />
      <path class="st0 svg13" d="M255.4,61.5V39.1h9.1c1.6,0,3.2,0.3,4.6,0.8c1.4,0.6,2.7,1.3,3.7,2.3s1.8,2.2,2.4,3.5c0.6,1.4,0.9,2.9,0.9,4.5
  c0,2.1-0.5,4-1.5,5.7c-1,1.7-2.4,3-4.2,4c-1.8,1-3.8,1.4-6,1.4H255.4z M259.1,58.1h5.5c2.2,0,4-0.7,5.5-2.2
  c1.5-1.5,2.2-3.3,2.2-5.6c0-2.3-0.7-4.1-2.2-5.6c-1.5-1.5-3.4-2.2-5.6-2.2h-5.3V58.1z" />
      <path class="st0 svg14" d="M279,59.6c0-0.6,0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.4-0.6s1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5
  c0,0.6-0.2,1.1-0.6,1.5c-0.4,0.4-0.9,0.6-1.5,0.6s-1.1-0.2-1.4-0.6C279.2,60.8,279,60.3,279,59.6z M279.2,44.9v-5.5h3.5v5.5
  l-0.6,9.4h-2.3L279.2,44.9z" />
      <path class="st0 svg15" d="M292.1,65.8h18.1V68h-18.1V65.8z" /
  </g>
</svg >\`;
  document.getElementsByClassName("container")[0].innerHTML = str;
  `;

  const [htmlValue, setHtml] = useState(initialHTML);
  const [cssValue, setCSS] = useState(initialCSS)
  const [jsValue, setJs] = useState(initialJS);

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

      <div className="outputScreen">
        <iframe srcDoc={"<html>" + htmlValue + "</html>" + "<style>" + cssValue + "</style>" + "<script>" + jsValue + "</script>"} width="100%" height="100%" frameBorder="false">
        </iframe>
      </div>


    </center>
  )
}
