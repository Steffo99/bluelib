import style from "./TablePanel.less";
import concatClass from "../../utils/concatClass";

export default function (props) {
    return (
        <table class={concatClass(style.tablepanel, props.class)}>
            {props.children}
        </table>
    );
}
