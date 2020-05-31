import SyntaxHighlighter from 'react-syntax-highlighter'
import {monokai} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import stripTabs from "../../utils/stripTabs";

export default function(props) {
    return (
        <SyntaxHighlighter language={props.language ? props.language : "plaintext"} style={monokai}>
            {stripTabs(String(props.children))}
        </SyntaxHighlighter>
    )
}
