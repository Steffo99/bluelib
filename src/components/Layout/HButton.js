import style from './HButton.less';
import {concatClass} from "../../index";
import ValidityStatus from "../Enums/ValidityStatus";

export default function (props) {
	return (
		<label class={concatClass(style.label, style[props.validity ? props.validity.validity : ValidityStatus.NONE])}>
			<div class={style.grid}>
				<div class={style.text}>{props.label}</div>
				<div class={style.icon}>{props.icon}</div>
				<button
					onClick={(props.disabled && props.validity.validity === ValidityStatus.DISABLED) ? null : props.onClick}
					class={style.button}
					disabled={props.validity ? props.validity.validity === ValidityStatus.DISABLED : false}
				>
					{props.children}
				</button>
				<div className={style.message}>
					{props.validity ? props.validity.message : ""}
				</div>
			</div>
		</label>
	);
}
