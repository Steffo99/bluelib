import concatClass from "../../utils/concatClass";
import style from "./FormRow.less";
import theme from "../../styles/theme.less"

export default function (props) {
    let color = null;
    if(props.disabled) {
        color = theme.disabled;
    }
    else if(props.validity) {
        color = theme[props.validity.validity];
    }

    return (
        <label
            className={concatClass(style.label, color)}>
            <div className={style.text}>
                {props.label}
            </div>
            <div className={style.icon}>
                {props.validity ? props.validity.icon : ""}
            </div>
            <div className={style.contents}>
                {props.children}
            </div>
            <div className={style.message}>
                {props.validity ? props.validity.message : ""}
            </div>
        </label>
    );
}
