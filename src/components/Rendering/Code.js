import SyntaxHighlighter from 'react-syntax-highlighter'
import stripTabs from "../../utils/stripTabs";
import {useContext} from "preact/hooks";
import CodeDefaultLanguage from "../../contexts/CodeDefaultLanguage";
import CodeDefaultStyle from "../../contexts/CodeDefaultStyle";

export default function(props) {
    const language = useContext(CodeDefaultLanguage)
    const style = useContext(CodeDefaultStyle)

    return (
        <SyntaxHighlighter language={props.language ? props.language : language}
                           style={props.style ? props.style : style}>
            {stripTabs(String(props.children))}
        </SyntaxHighlighter>
    )
}
