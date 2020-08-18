import concatClass from "../../utils/concatClass";
import style from "./FormRow.less";

export default function (props) {
    let color = null;
    if(props.disabled) {
        color = style.disabled;
    }
    else if(props.validity) {
        color = style[props.validity.validity];
    }

    return (
        <label class={concatClass(style.label, color)}>
            <div class={style.text}>
                {props.label}
            </div>
            <div class={style.icon}>
                {props.validity ? props.validity.icon : ""}
            </div>
            <div class={style.contents}>
                {props.children}
            </div>
            <div class={style.message}>
                {props.validity ? props.validity.message : ""}
            </div>
        </label>
    );
}
