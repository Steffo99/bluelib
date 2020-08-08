import style from "./Box.less";
import {concatClass} from "../../index";

export const BoxColors = Object.freeze({
    RED: style.red,
    ORANGE: style.orange,
    YELLOW: style.yellow,
    LIME: style.lime,
    CYAN: style.cyan,
    BLUE: style.blue,
    MAGENTA: style.magenta,
    DEFAULT: style.default
})

export default function (props) {
    let color = BoxColors.DEFAULT;
    if(props.color) {
        color = props.color;
    }

    return (
        <div class={concatClass(style.box, color, props.class)}>
            {props.children}
        </div>
    );
}
