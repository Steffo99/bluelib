import style from './HInput.less';
import {concatClass} from "../../index";
import ValidityStatus from "../Enums/ValidityStatus";

export default function (props) {
	return (
		<label class={concatClass(style.label, style[props.validity ? props.validity.validity : ValidityStatus.NONE])}>
			<div class={style.grid}>
				<div className={style.text}>{props.label}</div>
				<div className={style.icon}>{props.icon}</div>
				<input
					className={style.input}
					type={props.type} value={props.value}
					onChange={props.onChange} disabled={props.validity ? props.validity.validity === ValidityStatus.DISABLED : false} name={props.name}/>
				<div className={style.message}>
					{props.validity ? props.validity.message : ""}
				</div>
			</div>
		</label>
	);
}
