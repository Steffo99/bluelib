import SyntaxHighlighter from 'react-syntax-highlighter'
import {monokai} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import stripTabs from "../../utils/stripTabs";
import {useContext} from "preact/hooks";
import CodeDefaultLanguage from "../../contexts/CodeDefaultLanguage";

export default function(props) {
    const language = useContext(CodeDefaultLanguage)

    return (
        <SyntaxHighlighter language={props.language ? props.language : language} style={monokai}>
            {stripTabs(String(props.children))}
        </SyntaxHighlighter>
    )
}
