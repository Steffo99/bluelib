import style from './HInput.less';
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
			<input className={concatClass(style.input, validityClass)} type={props.type} value={props.value}
				   onChange={props.onChange} disabled={props.disabled} name={props.name}/>
		</label>
	);
}
