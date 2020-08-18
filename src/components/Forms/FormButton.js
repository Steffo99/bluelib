import FormRow from "./FormRow";
import style from "./FormRow.less";
import concatClass from "../../utils/concatClass";
import theme from "../Bluelib.less";

export default function (props) {
	return (
		<FormRow
			disabled={props.disabled}
			validity={props.validity}
			label={props.label}>
			<button
				class={concatClass(style.contentschild, props.disabled ? theme.disabled : null)}
				onClick={props.disabled ? null : props.onClick}
				disabled={props.disabled}>
				{props.children}
			</button>
		</FormRow>
	);
}
