import {concatClass} from "../../index";
import style from "./FormRow.less";
import theme from "../../styles/theme.less"
import ValidityStatus from "../Enums/ValidityStatus";

export default function (props) {
    return (
        <label
            className={concatClass(style.label, theme[props.validity ? props.validity.validity : ValidityStatus.NONE])}>
            <div className={style.text}>{props.label}</div>
            <div className={style.icon}>{props.icon}</div>
            <div className={style.contents}>
                {props.children}
            </div>
            <div className={style.message}>
                {props.validity ? props.validity.message : ""}
            </div>
        </label>
    );
}
