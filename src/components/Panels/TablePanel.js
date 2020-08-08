import style from "./TablePanel.less";
import {concatClass} from "../../index";

export default function (props) {
    return (
        <table class={concatClass(style.tablepanel, props.class)}>
            {props.children}
        </table>
    );
}
