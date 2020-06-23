import style from './HButton.less';
import {concatClass} from "../../index";

export default function (props) {
	let validityClass = null;
	if(props.validity === true) {
		validityClass = style.valid;
	}
	else if(props.validity === false) {
		validityClass = style.invalid;
	}


	return (
		<label className={style.label}>
			<div className={style.text}>{props.label}</div>
			<button
				onClick={props.disabled ? null : props.onClick}
				className={concatClass(style.button, validityClass)}
				disabled={props.disabled}
			>
				{props.children}
			</button>
		</label>
	);
}
