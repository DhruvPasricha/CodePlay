import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');
function Editor(prop) {


    const { value, lang, setValue, displayName } = prop;
    return (
        <td>
            <div class="editor">
                < button > {displayName}</button >
                <CodeMirror
                    value={value}
                    options={{
                        mode: lang,
                        theme: 'material',
                        lineNumbers: false,
                        autofocus: true,
                        readOnly: false,
                    }}
                    onBeforeChange={(editor, data, newValue) => {
                        setValue(newValue);
                    }}
                    className="code-editor"
                />
            </div>
        </td>

    );

}

export default Editor