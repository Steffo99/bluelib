import React, {useContext} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ContextCodeLanguage from "../../contexts/ContextCodeLanguage";
import ContextCodeSkin from "../../contexts/ContextCodeSkin";
import stripIndent from "strip-indent";


export default function Code({children, style, language, skin}) {
    let ctxLanguage = useContext(ContextCodeLanguage);
    let ctxSkin = useContext(ContextCodeSkin);

    return (
        <SyntaxHighlighter
            language={language ?? ctxLanguage}
            style={skin ?? ctxSkin}
            customStyle={style}
        >
            {stripIndent(children).trim()}
        </SyntaxHighlighter>
    )
}
