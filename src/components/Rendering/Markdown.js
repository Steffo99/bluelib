import showdown from "showdown";
import stripTabs from "../../utils/stripTabs";
import style from "./Markdown.less";

export default function(props) {
    let converter = new showdown.Converter({
        "tables": true,
    });
    converter.setFlavor("github");

    let html = converter.makeHtml(stripTabs(String(props.children)));

    return <div class={style.markdown} dangerouslySetInnerHTML={{__html: html}}/>;
}
